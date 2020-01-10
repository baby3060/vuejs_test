import Vue from 'vue'
import Vuex from 'vuex'
import Module1 from './modules/Module1'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

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
    incrementNum(state, n) {
      state.count += n
    },
    incrementPay(state, payload) {
      state.count += payload.amount
    },
    decrement: state => state.count--,
    decrementPay(state, payload) {
      state.count -= (payload.amount - payload.amount2);
      // state.count -= payload;
    },
    multiply(state, payload) {
      state.count = state.count * payload.value
    }
  },
  getters : {
    frontList : (state, getters) => {
      return state.fwList.filter(frameW => frameW.isFront)
    }
  },
  actions : {
    // 인자값으로 {commit}이 아닌 context를 넘겨서 context.commit과 같이 호출해도 됨
    decrementAsync({commit, state}, payload) {
      // 액션에서는 변이를 호출
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('decrementPay', payload);
          resolve()
        }, 1000)
      })
    },
    afterDecrement({dispatch, commit}) {
      console.log("dididi");
    }
  },
  modules : {
    cart,
    products
  }
});

export default store;
