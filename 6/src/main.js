import Vue from 'vue';
import App from './App.vue';
import store from './store';
import "@babel/polyfill";

import { MdButton, MdField, MdCard, MdList, MdIcon, MdDialog } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdCard)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdDialog)

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
