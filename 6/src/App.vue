<template>
  <div>
    <div style="width : 100%;">
      <md-card class="md-layout-item md-size-50 md-small-size-100" style="margin : 0 auto;">
        <TodoHeader />
        <TodoInput />
        <TodoList />
        <TodoFooter />
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
  }
}
</script>
