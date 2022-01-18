import axios from 'axios' 

export const appelApi = async() => {
    let pokemontableau = []
    await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=55')
    .then(async(response) =>{
        console.log(response.data.results)
        let responsePokemon = response.data.results;



      for(let i = 0; i<responsePokemon.length; i++){
        let pokemon = new Object()
          pokemon.name = responsePokemon[i].name;




       await axios
       .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       .then(async(response2)=>{
        pokemon.image = response2.data.sprites.front_default
        pokemon.id = response2.data.id       
        pokemon.type = response2.data.types[0].type.name          


        
       await axios
       .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
       .then((response3)=>{
        pokemon.francais = response3.data.names[4].name

        pokemontableau.push(pokemon)
         })
       })
              
         }        
        });
        return pokemontableau;
    }
