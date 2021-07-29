const mainNavigation = document.querySelector(".main-navigation");
const overlay = mainNavigation.querySelector(".overlay");
const toggler = mainNavigation.querySelector(".navbar-toggler");
const togglerMenu = mainNavigation.querySelector(".icon-menu");
const togglerClose = mainNavigation.querySelector(".icon-close");

const sidebar = mainNavigation.querySelector(".navbar-nav");

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");
const iconMenu = () => togglerMenu.classList.add("active");
const changeIconMenu = () => togglerMenu.classList.remove("active");
const iconClose = () => togglerClose.classList.add("active");
const changeIconClose = () => togglerClose.classList.remove("active");

toggler.addEventListener("click", openSideNav);
toggler.addEventListener("click", iconMenu);
toggler.addEventListener("click", iconClose);
overlay.addEventListener("click", closeSideNav);
overlay.addEventListener("click", changeIconMenu);
overlay.addEventListener("click", changeIconClose);

sidebar.addEventListener("click", closeSideNav);
sidebar.addEventListener("click", changeIconMenu);
sidebar.addEventListener("click", changeIconClose);

// document.addEventListener("swiped-right", openSideNav);
document.addEventListener("swiped-left", closeSideNav);