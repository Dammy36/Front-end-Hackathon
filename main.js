const collapsibles = document.querySelector("#collapsible--chevron2");
const mainSection = document.querySelector(".collapsible__content");

collapsibles.addEventListener("click", function () {
  mainSection.classList.toggle("collapsible-expanded");
});

/*when I click on the menu trigger, 
the menu appears
*/

function app() {
  //get the bell-menu
  const menuTrigger = document.querySelector("#bell-menu-notification");
  const menu = document.querySelector("#notification-menu-content");

  menuTrigger.addEventListener("click", function () {
    menu.classList.toggle("menu-active");
  });
  //add a click event listener to th menu trigger
  //when the menu trigger is clicked
  //add menu-active class tto the menu
}
app();

function menuApp() {
  const navText = document.querySelector("#nav-button");

  const menuBar = document.querySelector("#menu-bar-content");

  navText.addEventListener("click", function () {
    menuBar.classList.toggle("menu-bar-activation");
  });
}

menuApp();

function navApp() {
  const nav = document.querySelector("#nav-display");

  const menuBar = document.querySelector("#menu-bar-content");

  const isExpanded = menuBar.attributes["aria-expanded"].value === "true";

  const allMenuItems = nav.querySelectorAll('[role="text-section"]');
  console.log(allMenuItems);

  nav.addEventListener("click", function () {
    menuBar.classList.toggle("menu-bar-activation");

    if (isExpanded) {
      menuBar.ariaExpanded = "false";
      menuBar.focus();
    } else {
      menuBar.ariaExpanded = "true";
      allMenuItems.item(0).focus();
    }
  });
}
navApp();

function dropDown() {
  const elements = document.querySelector(".collapsible--icon");
  const contents = document.querySelector(".collapsible--boder");

  elements.addEventListener("click", function () {
    contents.classList.toggle("collapsible--boder_content");
  });
}
dropDown();
