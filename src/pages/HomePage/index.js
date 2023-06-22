import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';

export const HomePage = () => {
  const pageElement = document.createElement('div');
  pageElement.classList.add('page');

  const main = document.createElement('main');
  main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());

  pageElement.append(Header(), main, Footer());

  return pageElement;
};
