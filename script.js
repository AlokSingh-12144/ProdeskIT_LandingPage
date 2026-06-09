const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
