<template>
  <div>
    <div style="width : 100%;">
      <md-card class="md-layout-item md-size-50 md-small-size-100" style="margin : 0 auto;">
        <TodoHeader />
        <TodoInput @addTodo="insertTodo"></TodoInput>
        <TodoList :propsdata="todoItems" @removeTodoMain="removeTodo"></TodoList>
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
  created : function() {
    localStorage.clear();

    let storage = localStorage;
    let storageLen = storage.length;

    if( storageLen > 0 ) {

      for( let i = 0; i < storageLen; i++ ) {
        let localKey = storage.key(i);
        if (localKey === 'loglevel:webpack-dev-server') continue;

        this.todoItems.push({
          key : storage.key(i),
          value : storage.getItem(i)
        });
      }
    }
  },
  data : () => {
    return {
      lastIndex : 0,
      todoItems : []
    }
  },
  methods : {
    insertTodo : function(newTodoItem) {
      let key = this.lastIndex++;
      localStorage.setItem(key, newTodoItem);
      this.todoItems.push({
        key : key,
        value : newTodoItem
      });
    },
    removeTodo : function(key, index) {
      localStorage.removeItem(key);
      this.todoItems.splice(index, 1);
    },
    clearAll : function() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
}
</script>
