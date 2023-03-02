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

export function createHomeInfo() {
  const aboutP1 = document.createElement('p');
  aboutP1.textContent = `Broth made from scratch with homemade noodles we serve the best ramen you haven't had yet. With only one location
you can be sure we put it all we got into each and every bowl of ramen you eat.`;
  content.appendChild(aboutP1);

  const aboutP2 = document.createElement('p');
  aboutP2.textContent =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quas autem sapiente ullam explicabo delectus totam culpa deserunt saepe laudantium facere eum quis, unde molestiae est magni at ut quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta tenetur recusandae suscipit quibusdam provident dolorem officiis dolores? Similique quibusdam tenetur, minus sed dignissimos aliquid! Illum eaque quam veniam excepturi.';
  content.appendChild(aboutP2);
}
