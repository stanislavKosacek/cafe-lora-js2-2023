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

  const drinkInfoElm = element.querySelector('.drink__info');
  drinkInfoElm.append(...layers.map((layer) => Layer(layer)));

  return element;
};
