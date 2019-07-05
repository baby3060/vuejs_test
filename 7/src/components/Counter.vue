<template lang="html">
  <div>
    <p>{{count}}</p>
    <p>
      <button type="button" name="button" @click="increment">+</button>
      <button type="button" name="button" @click="incrementNum(5)">5씩 더하기</button>
      <button type="button" name="button" @click="decrementNum(5, 3)">2씩 빼기</button>
      <button type="button" name="button" @click="multi(3)">3씩 곱하기</button>
      <button type="button" name="button" @click="incrementObj">3씩 더하기</button>
      <button type="button" name="button" @click="decrement">-</button>
    </p>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions} from 'vuex'

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

    decrementNum : function(num, num2) {
      this.$store.dispatch('decrementAsync', {
        amount : num,
        amount2 : num2
      }).then(() => {
        console.log("성공");
        return this.$store.dispatch('afterDecrement');
      })
    },

    /*
      mapActions로 넘길 경우 payload 인자를 굳이 정하지 않아도 payload에 알아서 매칭됨
      여러 개의 인자를 넘겨야 할 경우 즉 payload를 사용할 경우에는 dispatch를 사용 하는 것이 좋음
    */
    /*
    ...mapActions({
      decrementNum : 'decrementAsync'
    }),
    */
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
