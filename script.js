
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
