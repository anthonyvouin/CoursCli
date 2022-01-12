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
import axios from 'axios'


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
   mounted(){
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then((response) =>{
        console.log(response.data.results)
        let responsePokemon = response.data.results;



      for(let i = 0; i<responsePokemon.length; i++){
        let pokemon = new Object()
        pokemon.name= responsePokemon[i].name




        axios
       .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       .then((response2)=>{
        pokemon.image = response2.data.sprites.front_default
        pokemon.id = response2.data.id       
        pokemon.type = response2.data.types[0].type.name          


        
        axios
       .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
       .then((response3)=>{
        pokemon.francais = response3.data.names[4].name

        this.pokemon.push(pokemon)
         })
      

       
        })
      }
    });
  } 
 
};
</script>

<style>

</style>
