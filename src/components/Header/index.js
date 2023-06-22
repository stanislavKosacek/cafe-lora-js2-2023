import './style.css';

export const Header = ({ showMenu = true }) => {
  const element = document.createElement('header');
  element.innerHTML = `
  <div class="header__content container">
    <div class="site-logo"></div>
  </div>
  `;
  const contentElm = element.querySelector('.header__content');
  if (showMenu) {
    contentElm.innerHTML += `
    <div class="navigation">
      <button class="nav-btn"></button>
      <nav class="rollout-nav nav-closed">
        <a href="#home">domů</a>
        <a href="#menu">menu</a>
        <a href="#gallery">galerie</a>
        <a href="#contact">kontakt</a>
      </nav>
    </div>
    `;
  } else {
    contentElm.innerHTML += `
    <nav class="inline-nav">
      <a href="/">Hlavní stránka</a>
    </nav>
    `;
  }
  const navBtn = element.querySelector('.nav-btn');
  const navElm = element.querySelector('.rollout-nav');
  if (navElm) {
    navBtn.addEventListener('click', () => {
      navElm.classList.toggle('nav-closed');
    });
    navElm.addEventListener('click', () => {
      navElm.classList.add('nav-closed');
    });
  }

  return element;
};
