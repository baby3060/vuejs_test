<template>
  <div>
    <div style="width : 100%;">
      <md-card class="md-layout-item md-size-50 md-small-size-100" style="margin : 0 auto;">
        <TodoHeader />
        <TodoInput @addTodo="insertTodo"></TodoInput>
        <TodoList :propsdata="todoItem" @removeTodoMain="removeTodo"></TodoList>
        <TodoFooter @clearAll="clearAll" />
      </md-card>
    </div>
  </div>
</template>

<style>
  body {
    margin : 0;
    padding : 0;
    text-align: center;
    background-color: #f6f6f8;
  }

</style>

<script>

import TodoList from './components/TodoList.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  },
  computed : {
    todoItem : function() {
      return this.$store.state.todoItems;
    }
  },
  methods : {
    insertTodo : function(newTodoItem) {
      let key = this.$store.state.lastIndex;
      localStorage.setItem(key, newTodoItem);
      this.$store.commit('insertTodo', {
        key : key,
        value : newTodoItem
      });
    },
    removeTodo : function(key, index) {
      localStorage.removeItem(key);
      this.$store.commit('deleteTodo', index);
    },
    clearAll : function() {
      localStorage.clear();
      this.$store.commit('initial');
    }
  }
}
</script>
