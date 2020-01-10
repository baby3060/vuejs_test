<template lang="html">
  <div id="app">
    <h1>쇼핑 카트 예제</h1>
    <hr />
    <h2><ProductList /></h2>
    <hr />
    <h2><ShoppingCart /></h2>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'

import ShoppingCart from './ShoppingCart.vue'

export default {
  components : {ProductList, ShoppingCart}
}
</script>

<style lang="css" scoped>
</style>
