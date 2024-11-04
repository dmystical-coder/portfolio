// navbar

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const navigationLinks = document.querySelector(".navigation-links");
close.addEventListener('click', () => {
    console.log('close');
    hamburger.style.display = 'block';
    close.style.display = 'none';
    navigationLinks.classList.add('hidden');
})

hamburger.addEventListener('click', () => {
    close.style.display = 'block';
    close.style.zIndex = '1000';
    hamburger.style.display = 'none';
    navigationLinks.classList.remove('hidden');
})
