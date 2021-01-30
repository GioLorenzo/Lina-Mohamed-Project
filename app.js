const headline = document.querySelectorAll('.up');
const nav = document.querySelector('.nav');
const subName = document.querySelector('.sub-name');
const bottomLText = document.querySelector('.bottom-l-text span');
const spans = document.querySelectorAll(".span-wrap span");
const arrow = document.querySelector('.arrow');
const selectedWorks = document.querySelector('.selected-works');
const workContainer = document.querySelector('.work-container');


window.addEventListener('load', () => {
  navLinksUp();
  setTimeout(() => headlineUp(), 300);
  setTimeout(() => subNameUp(), 800);
  setTimeout(() => spansUp(), 900);
  setTimeout(() => arrowUp(), 3700);
});

const navLinksUp = () => {
  nav.style.transition = 'transform 1000ms ease';
  nav.style.transform = 'translateY(0)';
  setTimeout(() => nav.children[0].firstChild.nextSibling.firstChild.focus(), 800);
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
    }, i * 300)
  })
}

const arrowUp = () => {
  arrow.style.transition = 'transform 1000ms ease';
  arrow.style.transform = 'translate(0, 0)';
}

const selectedWorksUp = () => {
  selectedWorks.style.transition = 'transform 1000ms ease';
  selectedWorks.style.transform = 'translate(0, 0)';
}

const workContainerUp = () => {
  workContainer.style.transition = 'all 1000ms ease'
  workContainer.style.opacity = '1';
  workContainer.style.transform = 'translateY(0)';
}

function scrollAppear() {
  selectedWorksListen();
  workContainerListen();
}

window.addEventListener('scroll', scrollAppear);

function selectedWorksListen() {
  const selectedWorksPosition = selectedWorks.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;
  if (selectedWorksPosition < screenPosition) {
    selectedWorksUp();
  }
}

function workContainerListen() {
  const workContainerPosition = workContainer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;
  if (workContainerPosition < screenPosition) {
    workContainerUp();
  }
}

