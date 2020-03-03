import './styles/style.scss';
import '/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/assets/img/background.jpg';
import Vue from 'vue';

//import VueRouter from 'vue-router';
//Vue.use(VueRouter);

//import app from './app.vue';

let app = new Vue({
  el: '#app',
  data: {
    title: 'Crowfest 2019'
  }
});

Vue.component('foot', {
  template: `<footer>
    <p>something</p>
  </footer>`,
  data() {
    return {};
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
