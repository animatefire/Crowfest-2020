import './styles/style.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

// Components
import navigation from './components/Nav.vue';
import foot from './components/Footer.vue';
import artistCard from './components/artistCard.vue';
import googleMap from './components/Map.vue';
import ticketButton from './components/ticketButton.vue';
import logo from './components/Logo.vue';
import scheduleCard from './components/ScheduleCard.vue';

import facebookIcon from './components/icons/facebook__icon.vue';
import instagramIcon from './components/icons/instagram__icon.vue';
import youtubeIcon from './components/icons/youtube__icon.vue';
import musicIcon from './components/icons/music__icon.vue';
import spotifyIcon from './components/icons/spotify__icon.vue';
import twitterIcon from './components/icons/twitter__icon.vue';
import websiteIcon from './components/icons/website__icon.vue';
import countdown from './components/Countdown.vue';

// Components Registration
Vue.component('navigation', navigation);
Vue.component('foot', foot);
Vue.component('artist-card', artistCard);
Vue.component('google-map', googleMap);
Vue.component('ticket-button', ticketButton);
Vue.component('logo', logo);
Vue.component('scheduleCard', scheduleCard);
Vue.component('facebook-icon', facebookIcon);
Vue.component('instagram-icon', instagramIcon);
Vue.component('youtube-icon', youtubeIcon);
Vue.component('spotify-icon', spotifyIcon);
Vue.component('music-icon', musicIcon);
Vue.component('twitter-icon', twitterIcon);
Vue.component('website-icon', websiteIcon);
Vue.component('countdown', countdown);

// View Imports
import Home from './views/Home.vue';
import Artists from './views/Artists.vue';
import Location from './views/Location.vue';
import About from './views/About.vue';
import Camping from './views/Camping.vue';

// View Registration
Vue.component('home', Home);
Vue.component('artists', Artists);
Vue.component('location', Location);
Vue.component('about', About);
Vue.component('camping', Camping);

// Routes
const routes = [
  { path: '/', component: Home },
  { path: '/artists', component: Artists },
  { path: '/location', component: Location },
  { path: '/camping', component: Camping },
  { path: '/about', component: About }
];

// Router
const router = new VueRouter({
  routes //short for `routes : routes`
});

// App
const app = new Vue({
  router
}).$mount('#app');
