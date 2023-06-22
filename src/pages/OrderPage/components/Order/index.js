import { OrderItem } from '../OrderItem';
import './style.css';

export const Order = ({ items }) => {
  const element = document.createElement('div');
  element.className = 'order__content container';

  element.innerHTML = `
  <h1>Vaše objedávnka</h1>
  <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
  <div class="order__items"></div>
  `;

  if (items === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(
          Order({
            items: data.result.filter((item) => item.ordered),
          }),
        );
      });

    return element;
  }

  const itemsElm = element.querySelector('.order__items');
  itemsElm.append(...items.map((item) => OrderItem(item)));

  return element;
};
