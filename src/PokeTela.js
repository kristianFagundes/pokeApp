import Card from "./card";
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function PokeTela() {
  const [text, setText] = useState();
  const [pokemons, setPokemons] = useState([]);


  async function buscaPokemon(pokeName) {
    console.log(pokeName);
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    let body = await response.json()
    console.log(body)

    let pokemon = {
      "name":body.name,
      "id":body.id,
      "weight":body.weight,
      "sprites":body.sprites.front_default,
      "status":body.stats,
      "Types":body.Types

    
    
    }
    console.log(pokemons)
    setPokemons([pokemon, ...pokemons])
  }

  return (
    <Box>
      <TextField
        onChange={(v) => {
          console.log(v.target.value);
          setText(v.target.value);
        }}
      ></TextField>
      <Button
        onClick={(v) => {
          buscaPokemon(text);
        }}
      >
        Ok
      </Button>

      {
        
        pokemons.map((pokemon)=>{
          return(
          <Card
        img={pokemon.sprites}
        name={pokemon.name}
        health={"HP: "+pokemon.status[0].base_stat}
        attak={"Ataque: "+pokemon.status[1].base_stat}
        defense={"Defesa: "+pokemon.status[2].base_stat}
        sp_atk={"Sp. Atk: "+pokemon.status[3].base_stat}
        sp_def={"Sp. Def: "+pokemon.status[4].base_stat}        
        speed={"Speed: "+pokemon.status[5].base_stat}
        weight={"Peso: "+pokemon.weight}
      />)
        })

      }
    </Box>
  );
}
