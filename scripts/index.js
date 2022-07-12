const CLASS_OPEN_MOBILE_MENU = "menu-mobile_open";

function handleOpenMenu() {
  const mobileMenu = document.getElementById("menu-mobile");
  mobileMenu.classList.add(CLASS_OPEN_MOBILE_MENU);
}

function handleCloseMenu() {
  const mobileMenu = document.getElementById("menu-mobile");

  mobileMenu.classList.remove(CLASS_OPEN_MOBILE_MENU);
}

const menu = document.getElementById("menu");
menu.addEventListener("click", handleOpenMenu, false);

const closeMenu = document.getElementById("menu-close");
closeMenu.addEventListener("click", handleCloseMenu, false);
