<template lang="html">
  <ul>
    <li v-for="(data, index) in todoItems" :key="data.key" class="shadow">
      <i class="checkBtn fa fa-check" aria-hidden="true"></i>
      {{data.value}}
      <span class="removeBtn" type="button" @click="removeTodo(data.key, index)">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </span>
    </li>

  </ul>
</template>

<script>
export default {
  data : function() {
    return {
      todoItems : []
    }
  },
  methods : {
    removeTodo : function(key, index) {
      localStorage.removeItem(key);
      this.todoItems.splice(index, 1);
    }
  },
  created : function() {
    let storage = localStorage;
    let storageLen = storage.length;

    if( storageLen > 0 ) {

      for( let i = 0; i < storageLen; i++ ) {
        let localKey = storage.key(i);
        if (localKey === 'loglevel:webpack-dev-server') continue;

        this.todoItems.push({
          key : storage.key(i),
          value : storage.getItem(i)
        });
      }
    } else {
      for( let i = 0; i < 5; i++ ) {
        this.todoItems.push({
          key : i,
          value : i + " : fasifisadifisadfiasdffffffffffffffffffffffffffffasidfisadfiaisdfsiifi"
        });
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .removeBtn {
    margin-left : auto;
    color : #de4343;
  }

  ul {
    list-style-type : none;
    padding-left : 0px;
    margin-top : 0;
    text-align : left;
  }

  li {
    display : flex;
    min-height : 50px;
    height : 50px;
    line-height : 50px;
    margin : 0.5rem 0;
    padding : 0 0.9rem;
    background-color : white;
    border-radius : 5px;
  }

  .checkBtn {
    line-height : 45px;
    color : #62acde;
    margin-right : 5px;
  }

  .removeBtn {
    margin-left : auto;
    color : #de4343;
  }

  .shadow {
    box-shadow : 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
