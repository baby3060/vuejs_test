<template lang="html">
  <ul>
    <li v-for="product in products" :key="product.id">
      {{product.title}} - {{product.price | currency}}
      <br />
      <button
        :disabled="!product.stock"
        @click="addProductToCart(product)"
      >
        카트에 추가
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  // 모든 내역을 products에 저장
  computed : mapState({
    products: state => state.products.all
  }),
  // 메소드
  methods : mapActions('cart', [
    'addProductToCart'
  ]),
  // 생성되어짐과 동시에 카트에 있는 내용 다 불러옴
  created() {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>

<style lang="css" scoped>
</style>
