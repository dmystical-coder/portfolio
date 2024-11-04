// navbar

const showMenu = document.getElementById("show-menu");
const hideMenu = document.getElementById("hide-menu");

const navigationLinks = document.querySelector(".navigation-links");

showMenu.addEventListener("click", () => {
    navigationLinks.classList.add("active");
    showMenu.style.display = "none";
    hideMenu.style.display = "block";

});

hideMenu.addEventListener("click", () => {
    navigationLinks.classList.remove("active");
    hideMenu.style.display = "none";
    showMenu.style.display = "block";
});