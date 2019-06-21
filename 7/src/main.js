import Vue from 'vue'
import App from './App.vue'
import store from './store'

import "@babel/polyfill";

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
