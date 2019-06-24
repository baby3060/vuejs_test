<template>
  <div>
    <Counter></Counter>
    <Getter></Getter>
  </div>

</template>

<script>

import Counter from './components/Counter.vue'
import Getter from './components/Getter.vue'

export default {
  components : {
    'Counter' : Counter,
    'Getter' : Getter
  }
}
</script>

<style>

</style>
