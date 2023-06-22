import { Drink } from './components/Drink';
import './style.css';

export const Menu = ({ drinks }) => {
  const element = document.createElement('section');
  element.id = 'menu';
  element.classList.add('menu');
  element.innerHTML = `
  <div class="container">
    <h2>Naše nabídka</h2>
    <p class="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na
      obsluhu
    </p>
    <div class="drinks-list"></div>

    <div class="order-detail">
      <a href="/objednavka">Detail objednávky</a>
    </div>
  </div>
  `;

  if (drinks === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(Menu({ drinks: data.result }));
      });

    return element;
  }

  element
    .querySelector('.drinks-list')
    .append(...drinks.map((drink) => Drink(drink)));

  return element;
};
