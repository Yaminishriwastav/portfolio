// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    
    // Toggle display of icons and menu
    hamIcon.classList.toggle('hidden');
    crossIcon.classList.toggle('hidden');
    menu.classList.toggle('show-menu');
});

