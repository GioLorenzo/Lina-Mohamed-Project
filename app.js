const headline = document.querySelectorAll('.up');
const nav = document.querySelector('.nav');
const subName = document.querySelector('.sub-name');
const bottomLText = document.querySelector('.bottom-l-text span');
const spans = document.querySelectorAll(".span-wrap span");
const arrow = document.querySelector('.arrow');


window.addEventListener('load', () => {
  navLinksUp();
  setTimeout(() => headlineUp(), 300);
  setTimeout(() => subNameUp(), 800);
  setTimeout(() => spansUp(), 900);
  setTimeout(() => arrowUp(), 2000);

});

const navLinksUp = () => {
  nav.style.transition = 'transform 1000ms ease';
  nav.style.transform = 'translateY(0)';
}

const headlineUp = () => {
  headline.forEach((span) => {
    span.style.transition = 'transform 1000ms ease';
    span.style.transform = 'translate(0, 0)';
  });
}

const subNameUp = () => {
  subName.style.transition = 'transform 1000ms ease';
  subName.style.transform = 'translate(0, 0)';
}

const spansUp = () => {
  spans.forEach((x, i) => {
    setTimeout(() => {
      x.style.transition = 'transform 1000ms ease';
      x.style.transform = 'translate(0, 0)';
    }, i * 150)
  })
}

const arrowUp = () => {
  arrow.style.transition = 'transform 1000ms ease';
  arrow.style.transform = 'translate(0, 0)';
}


