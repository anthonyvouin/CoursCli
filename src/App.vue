<template>
  <div>
    <Grid></Grid>
    <Cell :monage="age"></Cell>
    <div :key="index" v-for="(pok, index) in pokemon">
        <h1>{{ pok.francais }}</h1>
        <h1>{{ pok.id }}</h1>
        <h1>{{ pok.type }}</h1>
      
        <img v-bind:src="pok.image">
    </div>

  </div>
</template>

<script>
import Grid from './components/Grid.vue'
import Cell from './components/Cell.vue'
import {appelApi} from './js/api.js'



export default {
  
  name: 'App',
  components: {
    Grid, 
    Cell
  },
  data() {
    return {
     age: 20,
     pokemon:  [],

    }
  },
   async mounted(){
    this.pokemon = await appelApi()
  } 
 
};
</script>

<style>

</style>
