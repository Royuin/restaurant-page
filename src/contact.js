function makeContactHeader() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);

  const nav = document.createElement('nav');
  nav.classList = 'contact-nav';
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

function makeMainContent() {
  const contentMain = document.createElement('main');
  contentMain.classList = 'contact-main';
  content.appendChild(contentMain);

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact Us';
  contactHeading.classList = 'contact-heading';
  contentMain.appendChild(contactHeading);

  const locationHeading = document.createElement('h3');
  locationHeading.textContent = 'Location';
  contentMain.appendChild(locationHeading);
  const location = document.createElement('p');
  location.textContent = '123 Fake Location Blvd. State, Country 12345';
  contentMain.appendChild(location);

  const hoursHeading = document.createElement('h3');
  hoursHeading.textContent = 'Hours';
  contentMain.appendChild(hoursHeading);
  const hours = document.createElement('p');
  hours.textContent =
    'Monday, Tuesday, Wednesday, Thursday: \n 9 am - 10 pm \n Friday, Saturday, Sunday: 10 am - 12 pm';
  contentMain.appendChild(hours);

  const messageUs = document.createElement('h3');
  messageUs.textContent = 'Message Us';
  contentMain.appendChild(messageUs);

  const form = document.createElement('form');
  contentMain.appendChild(form);

  const nameLabel = document.createElement('label');
  nameLabel.for = 'name';
  nameLabel.textContent = 'Name: ';
  form.appendChild(nameLabel);
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  form.appendChild(nameInput);

  const emailLabel = document.createElement('label');
  emailLabel.for = 'email';
  emailLabel.textContent = 'Email: ';
  form.appendChild(emailLabel);
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.id = 'email';
  form.appendChild(emailInput);

  const textAreaLabel = document.createElement('label');
  textAreaLabel.for = 'message';
  textAreaLabel.textContent = 'Write your message: ';
  form.appendChild(textAreaLabel);
  const textArea = document.createElement('textarea');
  textArea.id = 'message';
  textArea.name = 'message';
  form.appendChild(textArea);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Send Message';
  form.appendChild(submitBtn);
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

export function makeContactPage() {
  makeContactHeader();
  makeMainContent();
  makeFooter();
}
