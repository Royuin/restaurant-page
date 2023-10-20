import TonkotsuRamen from './assets/imgs/tonkotsu-ramen.jpg';
import ShoyuRamen from './assets/imgs/shoyu-ramen.jpg';
import MisoRamen from './assets/imgs/miso-ramen.jpg';
import Udon from './assets/imgs/udon.jpg';
import Soba from './assets/imgs/soba-noodles.jpg';
import MisoSoup from './assets/imgs/miso.jpg';

function makeMenuHeader() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);

  const nav = document.createElement('nav');
  nav.classList = 'menu-nav';
  content.appendChild(nav);

  const h1 = document.createElement('h1');
  h1.textContent = 'Roku Sunset';
  nav.appendChild(h1);

  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home';
  homeLink.classList = 'home-link';
  nav.appendChild(homeLink);

  const menuLink = document.createElement('a');
  menuLink.textContent = 'Menu';
  menuLink.classList = 'menu-link';
  nav.appendChild(menuLink);

  const contactLink = document.createElement('a');
  contactLink.textContent = 'Contact';
  contactLink.classList = 'contact-link';
  nav.appendChild(contactLink);
}

function makeMainMenu() {
  const mainMenu = document.createElement('div');
  mainMenu.classList = 'main-menu';
  content.appendChild(mainMenu);

  const tonkotsuRamen = document.createElement('div');
  tonkotsuRamen.classList = 'card';
  tonkotsuRamen.textContent = 'Tonkotsu Ramen';
  const tonkotsuRamenImg = document.createElement('img');
  tonkotsuRamenImg.src = TonkotsuRamen;
  tonkotsuRamen.appendChild(tonkotsuRamenImg);
  mainMenu.appendChild(tonkotsuRamen);

  const shoyuRamen = document.createElement('div');
  shoyuRamen.classList = 'card';
  shoyuRamen.textContent = 'Shoyu Ramen';
  const shoyuRamenImg = document.createElement('img');
  shoyuRamenImg.src = ShoyuRamen;
  shoyuRamen.appendChild(shoyuRamenImg);
  mainMenu.appendChild(shoyuRamen);

  const misoRamen = document.createElement('div');
  misoRamen.classList = 'card';
  misoRamen.textContent = 'Miso Ramen';
  const misoRamenImg = document.createElement('img');
  misoRamenImg.src = MisoRamen;
  misoRamen.appendChild(misoRamenImg);
  mainMenu.appendChild(misoRamen);

  const misoSoup = document.createElement('div');
  misoSoup.classList = 'card';
  misoSoup.textContent = 'Miso Soup';
  const misoSoupImg = document.createElement('img');
  misoSoupImg.src = MisoSoup;
  misoSoup.appendChild(misoSoupImg);
  mainMenu.appendChild(misoSoup);

  const udon = document.createElement('div');
  udon.classList = 'card';
  udon.textContent = 'Udon';
  const udonImg = document.createElement('img');
  udonImg.src = Udon;
  udon.appendChild(udonImg);
  mainMenu.appendChild(udon);

  const soba = document.createElement('div');
  soba.classList = 'card';
  soba.textContent = 'Soba';
  const sobaImg = document.createElement('img');
  sobaImg.src = Soba;
  soba.appendChild(sobaImg);
  mainMenu.appendChild(soba);
}

function makeFooter() {
  const footerTag = document.createElement('footer');
  content.appendChild(footerTag);

  const copyright = document.createTextNode('Copyright \xA9 ');
  footerTag.appendChild(copyright);

  const copyrightLink = document.createElement('a');
  copyrightLink.href = 'https://github.com/Royuin';
  copyrightLink.textContent = 'Royuin ';
  footerTag.appendChild(copyrightLink);

  const rightsReserved = document.createTextNode('2023 All Rights Reserved');
  footerTag.appendChild(rightsReserved);
}

export function makeMenuPage() {
  makeMenuHeader();
  makeMainMenu();
  makeFooter();
}
