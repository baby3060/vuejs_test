<template lang="html">
  <ul>
    <li v-for="fwfront in frontList" v:key="fwFront.id">{{fwfront.name}}</li>
  </ul>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  // 저장소에서 상태를 가져오는 가장 간단한 방법(computed)
  computed : {
    ...mapGetters({
      frontList : 'frontList'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
