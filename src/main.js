import './styles/style.scss';
import '/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/assets/img/background.jpg';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

// Component Imports
//import app from './app.vue';
import navigation from './components/Nav.vue';
import foot from './components/Footer.vue';

// View Imports
import home from './views/Home.vue';

Vue.component('navigation', navigation);
Vue.component('foot', foot);
Vue.component('home', home);

var app = new Vue({
  el: '#app',
  data: {
    title: 'Crowfest 2020'
  }
});

/*
import location from '/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/views/Location.vue';
import about from '/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/views/About.vue';


const routes = [
  { path: '/', component: app },
  { path: '/location', component: location }
];

const router = new VueRouter({
  routes //short for `routes : routes`
});
*/
