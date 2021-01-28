import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';

const refMenu = document.querySelector('.js-menu');
const markup = menuTemplate(menu);
refMenu.insertAdjacentHTML('beforeend', markup);
