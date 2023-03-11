import TonkotsuRamen from './assets/imgs/tonkotsu-ramen.jpg';

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

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.classList = 'home-button';
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.classList = 'menu-button';
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contactBtn.classList = 'contact-button';
  nav.appendChild(contactBtn);
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
  shoyuRamenImg.src = '/src/assets/imgs/shoyu-ramen.jpg';
  shoyuRamen.appendChild(shoyuRamenImg);
  mainMenu.appendChild(shoyuRamen);

  const misoRamen = document.createElement('div');
  misoRamen.classList = 'card';
  misoRamen.textContent = 'Miso Ramen';
  const misoRamenImg = document.createElement('img');
  misoRamenImg.src = '/src/assets/imgs/miso-ramen.jpg';
  misoRamen.appendChild(misoRamenImg);
  mainMenu.appendChild(misoRamen);

  const misoSoup = document.createElement('div');
  misoSoup.classList = 'card';
  misoSoup.textContent = 'Miso Soup';
  const misoSoupImg = document.createElement('img');
  misoSoupImg.src = '/src/assets/imgs/miso-soup.jpg';
  misoSoup.appendChild(misoSoupImg);
  mainMenu.appendChild(misoSoup);

  const udon = document.createElement('div');
  udon.classList = 'card';
  udon.textContent = 'Udon';
  const udonImg = document.createElement('img');
  udonImg.src = '/src/assets/imgs/udon.jpg';
  udon.appendChild(udonImg);
  mainMenu.appendChild(udon);

  const soba = document.createElement('div');
  soba.classList = 'card';
  soba.textContent = 'Soba';
  const sobaImg = document.createElement('img');
  sobaImg.src = '/src/assets/imgs/soba-noodles.jpg';
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
