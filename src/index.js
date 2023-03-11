import '/src/assets/fonts/Labrada-VariableFont_wght.ttf';
import '/src/index.css';
import { makeMenuPage } from './menu';
import { makeHomePage } from './home';
import { makeContactPage } from './contact';

makeHomePage();

let homeBtn = document.querySelector('.home-button');
let menuBtn = document.querySelector('.menu-button');
let contactBtn = document.querySelector('.contact-button');

function addListener() {
  let homeBtn = document.querySelector('.home-button');
  let menuBtn = document.querySelector('.menu-button');
  let contactBtn = document.querySelector('.contact-button');

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

  contactBtn.addEventListener('click', () => {
    const content = document.getElementById('content');

    document.body.removeChild(content);

    makeContactPage();
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

contactBtn.addEventListener('click', () => {
  const content = document.getElementById('content');

  document.body.removeChild(content);

  makeContactPage();
  addListener();
});
