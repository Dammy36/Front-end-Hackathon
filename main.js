const collapsibles = document.querySelector("#collapsible--chevron2");
const mainSection = document.querySelector(".collapsible__content");

collapsibles.addEventListener("click", function () {
  mainSection.classList.toggle("collapsible-expanded");
});

/*
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
*/

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
  console.log(nav);
  const menuBar = document.querySelector("#menu-bar-content");

  nav.addEventListener("click", function () {
    menuBar.classList.toggle("menu-bar-activation");
  });
}
navApp();
