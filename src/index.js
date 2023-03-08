import { makeMenuPage } from './menu';
import { makeHomePage } from './home';

makeHomePage();

let homeBtn = document.querySelector('.home-button');
let menuBtn = document.querySelector('.menu-button');

function addListener() {
  let homeBtn = document.querySelector('.home-button');
  let menuBtn = document.querySelector('.menu-button');

  homeBtn.addEventListener('click', () => {
    const content = document.getElementById('content');

    document.body.removeChild(content);

    makeHomePage();
    addListener();
  });

  menuBtn.addEventListener('click', () => {
    const content = document.getElementById('content');

    document.body.removeChild(content);

    makeMenuPage();
    addListener();
  });
}

homeBtn.addEventListener('click', () => {
  const content = document.getElementById('content');

  document.body.removeChild(content);

  makeHomePage();
  addListener();
});

menuBtn.addEventListener('click', () => {
  const content = document.getElementById('content');

  document.body.removeChild(content);

  makeMenuPage();
  addListener();
});
