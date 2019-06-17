<template lang="html">
  <md-list>
    <md-list-item v-for="data in todoItems">
      <md-list-item>
        <md-icon>menu</md-icon>
        <span class="md-list-item-text">{{data.value}}</span>
      </md-list-item>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  data : function() {
    return {
      todoItems : []
    }
  },
  created : function() {
    let storage = localStorage;
    let storageLen = storage.length;

    if( storageLen > 0 ) {

      for( let i = 0; i < storageLen; i++ ) {

          this.todoItems.push({
            key : storage.key(i),
            value : storage.getItem(i)
          });
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
