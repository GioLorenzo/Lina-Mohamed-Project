const headline = document.querySelectorAll('.up');
const navLinks = document.querySelectorAll('.link-up');
const subName = document.querySelector('.sub-name');


window.addEventListener('load', () => {
  navLinksUp();
  setTimeout(() => headlineUp(), 200);
  setTimeout(() => subNameUp(), 500);
});

const navLinksUp = () => {
  navLinks.forEach((a) => {
    a.style.transition = 'transform 1000ms ease';
    a.style.transform = 'translate(0, 0)';
  });
}

const headlineUp = () => {
  headline.forEach((span) => {
    span.style.transition = 'transform 1000ms ease';
    span.style.transform = 'translate(0, 0)';
  });
}

