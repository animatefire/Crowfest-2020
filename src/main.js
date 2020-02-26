import './styles/style.scss';
import schedule from './assets/data/schedule';
import '/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/assets/img/background.jpg';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

// Component Imports
//import app from './app.vue';
import navigation from './components/Nav.vue';
import foot from './components/Footer.vue';
import artists from './views/Artists.vue';

// View Imports
import home from './views/Home.vue';

Vue.component('navigation', navigation);
Vue.component('foot', foot);
Vue.component('home', home);
Vue.component('artists', artists);

const routes = [{ path: '/', component: home }];

const router = new VueRouter({
  routes //short for `routes : routes`
});

const app = new Vue({
  router
}).$mount('#app');
