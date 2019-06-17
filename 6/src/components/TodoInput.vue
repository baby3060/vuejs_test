<template lang="html">
  <div>
    <md-dialog :md-active.sync="showAlert">
      <md-dialog-title>입력 경고</md-dialog-title>
      <md-dialog-content>할 일 내용을 입력바랍니다.</md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showAlert = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

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
  </div>
</template>

<script>

export default {
  data : () => {
    return {
      newTodoItem : '',
      lastIndex : 0,
      showAlert : false
    }
  },
  methods : {
    addToDo : function() {
      if(this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(this.lastIndex++, value);
        this.clearInput();
      } else {
        this.showAlert = true;
      }
    },
    clearInput : function() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style lang="css" scoped>
</style>
