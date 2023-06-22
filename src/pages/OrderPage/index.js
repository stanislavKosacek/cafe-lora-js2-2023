import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Order } from './components/Order';
import './style.css';

export const OrderPage = () => {
  const pageElement = document.createElement('div');
  pageElement.classList.add('page');

  const main = document.createElement('main');
  main.append(Order({ items: 'loading' }));

  pageElement.append(Header({ showMenu: false }), main, Footer());

  return pageElement;
};
