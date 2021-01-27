const headline = document.querySelectorAll('.up');
const navLinks = document.querySelectorAll('.link-up');
const subName = document.querySelector('.sub-name');


window.addEventListener('load', () => {
  navLinksUp();
  setTimeout(() => headlineUp(), 200);
  setTimeout(() => subNameUp(), 500);
});

