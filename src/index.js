import './styles/reset.scss';
import './styles/style.sass';
import './styles/animations.scss';
import './styles/layouts.scss';
import Utils from './services/Utils';
import '/Users/johnpfannkuchen/Documents/Web Development/Projects/Music-Festival-2020/src/assets/img/background.jpg';

import Home from './views/pages/Home.js';
import About from './views/pages/About.js';
import Tickets from './views/pages/Tickets.js';
import Camping from './views/pages/Camping.js';
import Location from './views/pages/Location.js';
import Artists from './views/pages/Artists.js';

//List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': Home,
  '/about': About,
  '/tickets': Tickets,
  '/camping': Camping,
  '/location': Location,
  '/artists': Artists
};

//The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  // Lazy load view elements:
  const content = document.getElementById('content');

  //Get the parsed URL from the address bar
  let request = Utils.parseRequestURL();

  //Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? '/' + request.verb : '');

  //Get the page from our hash of supported routes.
  // If the parsed url is not in our list of supported routes, select the 404 page instead

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();
  //await page.after_render();
};

//Listen on hash change:
window.addEventListener('hashchange', router);

//Listen on page load:
window.addEventListener('load', router);
