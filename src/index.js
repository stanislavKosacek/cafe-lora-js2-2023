import { HomePage } from './pages/HomePage';
import './style.css';

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
