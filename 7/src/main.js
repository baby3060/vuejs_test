import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './currency'

import "@babel/polyfill";

Vue.filter('currency', currency)

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
