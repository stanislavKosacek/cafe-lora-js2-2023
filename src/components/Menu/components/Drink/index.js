import { Layer } from '../Layer';
import './style.css';

export const Drink = ({ id, name, ordered, image, layers }) => {
  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
    <div class="drink__product">
    <div class="drink__cup">
      <img
        src=${image}
      />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  `;
  const orderBtn = element.querySelector('.order-btn');

  if (ordered) {
    orderBtn.textContent = 'Zrušit';
    orderBtn.classList.add('order-btn--ordered');
  } else {
    orderBtn.textContent = 'Objednat';
    orderBtn.classList.remove('order-btn--ordered');
  }

  orderBtn.addEventListener('click', () => {
    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        ordered: !ordered,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(Drink(data.result));
      });
  });

  const drinkInfoElm = element.querySelector('.drink__info');
  drinkInfoElm.append(...layers.map((layer) => Layer(layer)));

  return element;
};
