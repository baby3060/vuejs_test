<template lang="html">
  <div>
    <p>{{count}}</p>
    <p>
      <button type="button" name="button" @click="increment">+</button>
      <button type="button" name="button" @click="decrement">-</button>
    </p>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  // 저장소에서 상태를 가져오는 가장 간단한 방법(computed)
  computed : mapState({
    count: state => state.count
  }),
  methods: {
    increment : function() {
      this.$store.commit('increment');
    },
    decrement : function() {
      this.$store.commit('decrement');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
