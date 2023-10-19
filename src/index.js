import '/src/assets/fonts/Labrada-VariableFont_wght.ttf';
import '/src/index.css';
import { makeMenuPage } from './menu';
import { makeHomePage } from './home';
import { makeContactPage } from './contact';

makeHomePage();

let homeLink = document.querySelector('.home-link');
let menuLink = document.querySelector('.menu-link');
let contactLink = document.querySelector('.contact-link');

function addListener() {
  let homeLink = document.querySelector('.home-link');
  let menuLink = document.querySelector('.menu-link');
  let contactLink = document.querySelector('.contact-link');

  homeLink.addEventListener('click', () => {
    const content = document.getElementById('content');

    document.body.removeChild(content);

    makeHomePage();
    addListener();
  });

  menuLink.addEventListener('click', () => {
    const content = document.getElementById('content');

    document.body.removeChild(content);

    makeMenuPage();
    addListener();
  });

  contactLink.addEventListener('click', () => {
    const content = document.getElementById('content');

    document.body.removeChild(content);

    makeContactPage();
    addListener();
  });
}

homeLink.addEventListener('click', () => {
  const content = document.getElementById('content');

  document.body.removeChild(content);

  makeHomePage();
  addListener();
});

menuLink.addEventListener('click', () => {
  const content = document.getElementById('content');

  document.body.removeChild(content);

  makeMenuPage();
  addListener();
});

contactLink.addEventListener('click', () => {
  const content = document.getElementById('content');

  document.body.removeChild(content);

  makeContactPage();
  addListener();
});
