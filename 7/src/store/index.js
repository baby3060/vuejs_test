import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    fwList : [
      {id : "1", name : "vue.js", isFront : true},
      {id : "2", name : "angular.js", isFront : true},
      {id : "3", name : "jQuery", isFront : true},
      {id : "4", name : "react", isFront : true},
      {id : "5", name : "springframework", isFront : false},
      {id : "6", name : "genson", isFront : false},
      {id : "7", name : "gson", isFront : false}
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  getters : {
    frontList : (state, getters) => {
      return state.fwList.filter(frameW => frameW.isFront)
    }
  }
});

export default store;
