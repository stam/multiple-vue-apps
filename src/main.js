import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

console.log('running main.js')

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
