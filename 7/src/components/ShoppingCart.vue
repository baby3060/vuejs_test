<template lang="html">
  <div class="cart">
    <h2>카트</h2>
    <p v-show="!products.length"><i>카트가 비어있습니다.</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
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
    // 불러오기 위함.
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
