// navbar

const showMenu = document.getElementById("show-menu");
const hideMenu = document.getElementById("hide-menu");
const header = document.querySelector(".header");
const navigationLinks = document.querySelector(".navigation-links");

showMenu.addEventListener("click", () => {
    header.style.paddingBottom = "5rem";
    navigationLinks.classList.add("active");
    showMenu.style.display = "none";
    hideMenu.style.display = "block";
});

hideMenu.addEventListener("click", () => {
    navigationLinks.classList.remove("active");
    header.style.paddingBottom = "1rem";
    hideMenu.style.display = "none";
    showMenu.style.display = "block";
});