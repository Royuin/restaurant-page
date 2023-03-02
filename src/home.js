const content = document.getElementById('content');

export function makeHeader() {
  const header = document.createElement('header');
  content.appendChild(header);

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const h1 = document.createElement('h1');
  h1.textContent = 'Roku Sunset';
  nav.appendChild(h1);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  nav.appendChild(contactBtn);

  const quoteP = document.createElement('p');
  quoteP.classList = 'quote';
  quoteP.textContent = '"Only the pure in heart can make a good soup." \n';
  quoteP.textContent += '-Ludwig Van Beethoven';
  header.appendChild(quoteP);

  const headerImg = document.createElement('img');
  headerImg.src = '/src/imgs/ramen-shop.jpg';
  header.appendChild(headerImg);
}
