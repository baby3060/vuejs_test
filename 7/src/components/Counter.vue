<template lang="html">
  <div>
    <p>{{count}}</p>
    <p>
      <button type="button" name="button" @click="increment">+</button>
      <button type="button" name="button" @click="incrementNum(5)">5씩 더하기</button>
      <button type="button" name="button" @click="multi(3)">3씩 곱하기</button>
      <button type="button" name="button" @click="incrementObj">3씩 더하기</button>
      <button type="button" name="button" @click="decrement">-</button>
    </p>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  // 저장소에서 상태를 가져오는 가장 간단한 방법(computed)
  computed : mapState({
    count: state => state.count
  }),
  methods: {
    /*
    this.$store.commit({
        type : 'increment'
    });
    과 this.$store.commit('increment'); 는 동일
    */
    increment : function() {
      this.$store.commit({
          type : 'increment'
      });
    },
    decrement : function() {
      this.$store.commit('decrement');
    },
    incrementNum : function(num) {
      this.$store.commit('incrementNum', num);
    },
    incrementObj : function() {
      this.$store.commit('incrementPay', {
        amount : 3
      });
    },
    ...mapMutations({
      multi : {
          type : 'multiply',
          value : 3
      }
    })
  }
}
</script>

<style lang="css" scoped>
</style>
