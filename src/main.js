import './styles/style.scss';
import schedule from './assets/data/schedule';
import '/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/assets/img/background.jpg';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

// Components
import navigation from './components/Nav.vue';
import foot from './components/Footer.vue';
import artistCard from './components/artistCard.vue';
import googleMap from './components/Map.vue';

// Components Registration
Vue.component('navigation', navigation);
Vue.component('foot', foot);
Vue.component('artist-card', {
  data: function() {
    return { schedule };
  },
  template: `
  <div>
    <div v-for="(artist, i) in schedule">
      <h1> {{schedule[i].artist}} </h1>
      <h2>{{schedule[i].day}}</h2>
      <h3>{{schedule[i].time}}</h3>
      <h4>{{schedule[i].stage}}</h4>
    </div>
  </div>
  `
});
Vue.component('google-map', googleMap);

// View Imports
import Home from './views/Home.vue';
import Artists from './views/Artists.vue';
import Tickets from './views/Tickets.vue';
import Location from './views/Location.vue';
import About from './views/About.vue';
import Camping from './views/Camping.vue';

// View Registration
Vue.component('home', Home);
Vue.component('artists', Artists);
Vue.component('tickets', Tickets);
Vue.component('location', Location);
Vue.component('about', About);
Vue.component('camping', Camping);

// Routes
const routes = [
  { path: '/', component: Home },
  { path: '/artists', component: Artists },
  { path: '/tickets', component: Tickets },
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
