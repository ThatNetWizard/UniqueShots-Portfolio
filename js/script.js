// ========== Nav Toggle ==========
const hamburgerMenu = document.getElementById('hamburgerMenu');
const closeIcon = document.getElementById('closeIcon');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
