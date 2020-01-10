<template lang="html">
  <div class="cart">

    <p>Total: {{ total | currency }}</p>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  computed : {
    ...mapState({
      checkoutStatus : state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products : 'cartProducts',
      total : 'cartTotalPrice'
    })
  },
  methods : {
    checkout(products) {
      this.$store.dispatch('cart/init', products)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
