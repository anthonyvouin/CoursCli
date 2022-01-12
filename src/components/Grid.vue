<template>
  <div class="Grid">
    <h1>Mon Titre</h1>
    <Cell ></Cell>
    
  </div>
</template>

<script>

import Cell from './Cell.vue'

export default {
  name: 'Grid',
  components: {
    Cell, 
    
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
