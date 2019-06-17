<template lang="html">
  <md-card-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-small-size-100" style="text-align : right;">
        <md-field>
          <label>할 일?</label>
            <md-input v-model="newTodoItem" v-on:keyup.enter="addToDo"></md-input>
          </md-field>
          <md-button class="md-fab md-mini md-primary" v-on:click="addToDo">
          <md-icon>edit</md-icon>
        </md-button>
      </div>
    </div>
  </md-card-content>
</template>

<script>

export default {
  data : () => {
    return {
      newTodoItem : '',
      lastIndex : 0
    }
  },
  methods : {
    addToDo : function() {
      if(this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(this.lastIndex++, value);
        this.clearInput();
      }
    },
    clearInput : function() {
      this.newTodoItem = "";
    }
  },
  created : function() {
    let storage = localStorage;
    let storageLen = storage.length;
    let tempIdx = 0;

    if( this.lastIndex == 0 ) {
      if( storageLen > 0 ) {
        for( let i = 0; i < storageLen; i++ ) {
          if( !isNaN(localStorage.key(i)) ) {
            tempIdx++;
          }
        }
        this.lastIndex = tempIdx;
      } else {
        this.lastIndex = 0;
      }
    } 
  }
}
</script>

<style lang="css" scoped>
</style>
