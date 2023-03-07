const content = document.getElementById('content');

function makeHeader() {
  const header = document.createElement('header');
  content.appendChild(header);

  const nav = document.createElement('nav');
  header.appendChild(nav);

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

  const quoteP = document.createElement('p');
  quoteP.classList = 'quote';
  quoteP.textContent = '"Only the pure in heart can make a good soup." \n';
  quoteP.textContent += '-Ludwig Van Beethoven';
  header.appendChild(quoteP);

  const headerImg = document.createElement('img');
  headerImg.src = '/src/imgs/ramen-shop.jpg';
  headerImg.classList = 'home-img';
  header.appendChild(headerImg);
}

function makeHomeInfo() {
  const aboutP1 = document.createElement('p');
  aboutP1.textContent = `Broth made from scratch with homemade noodles we serve the best ramen you haven't had yet. With only one location
you can be sure we put it all we got into each and every bowl of ramen you eat.`;
  content.appendChild(aboutP1);

  const aboutP2 = document.createElement('p');
  aboutP2.textContent =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quas autem sapiente ullam explicabo delectus totam culpa deserunt saepe laudantium facere eum quis, unde molestiae est magni at ut quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta tenetur recusandae suscipit quibusdam provident dolorem officiis dolores? Similique quibusdam tenetur, minus sed dignissimos aliquid! Illum eaque quam veniam excepturi.';
  content.appendChild(aboutP2);

  const historyH2 = document.createElement('h2');
  historyH2.textContent = 'History of Roku Sunset';
  content.appendChild(historyH2);

  const historyP = document.createElement('p');
  historyP.textContent =
    'While this restaurant may not actually exist, you can rest assured this website was made with a love of web development and good bowl of ramen.';
  content.appendChild(historyP);
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

export function makeHomePage() {
  makeHeader();
  makeHomeInfo();
  makeFooter();
}
