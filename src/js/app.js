// navbar

const hamburger = document.querySelector(".hamburger");

const navigationLinks = document.querySelector(".navigation-links");

hamburger.addEventListener('click', () => {
    navigationLinks.classList.toggle('hidden');
})