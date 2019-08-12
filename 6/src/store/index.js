import Vue from 'vue'
import Vuex from 'vuex'

import { mapState } from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lastIndex : 0,
    todoItems : []
  },
  mutations: {
    initial(state) {
      state.lastIndex = 0;
      state.todoItems = [];
    },
    insertTodo(state, payload) {
      state.todoItems.push({
        key : payload.key,
        value : payload.value
      });
      state.lastIndex++;
    },
    deleteTodo(state, index) {
      state.todoItems.splice(index, 1);
    }
  }
});

export default store;
