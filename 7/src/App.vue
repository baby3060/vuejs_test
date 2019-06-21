<template>
  <div>
    <p>{{count}}</p>
    <p>
      <button type="button" name="button" @click="increment">+</button>
      <button type="button" name="button" @click="decrement">-</button>
    </p>
  </div>

</template>

<script>

export default {
  computed : {
    count : function() {
      return this.$store.state.count;
    }
  },
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

<style>

</style>
