import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import './style.css';

export const OrderPage = () => {
  const pageElement = document.createElement('div');
  pageElement.classList.add('page');

  const main = document.createElement('main');
  //main.append();
  main.innerHTML = `
  <div class="order__content container">
    <h1>Vaše objedávnka</h1>
    <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
    <div class="order__items">
      <div class="order-item">
        <img src="https://cafelora.kodim.app/assets/cups/vienna-coffee.png" class="order-item__image">
        <div class="order-item__name">
          Vídeňská káva
        </div>
      </div>

      <div class="order-item">
        <img src="https://cafelora.kodim.app/assets/cups/chocolate-milk.png" class="order-item__image">
        <div class="order-item__name">
          Čokoláda s mlékem
        </div>
      </div>
    </div>
  </div>
  `;

  pageElement.append(Header({ showMenu: false }), main, Footer());

  return pageElement;
};
