import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import * as styled from "./styles"


export default function PokemonIcon(){
    const {name} = useParams();
    const [pokemon, setPokemon] = useState();
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        async function getPokemon(){
          await axios.get("https://pokedex20201.herokuapp.com/pokemons/" + name)
          .then(response => setPokemon(response.data))
          .catch(error => alert(error));
        }
        getPokemon()
      },[name])

      const handleFav = event=>{
          async function favPokemon(){
            await axios.post("https://pokedex20201.herokuapp.com/users/"+user+"/starred/"+pokemon.name)
            .then(alert(pokemon.name+" Adicionado aos seus favoritos"))
            .catch(error => alert(error))
          }
          event.preventDefault();
          favPokemon();
      }
    return (
        <>
        {pokemon ? (
            <styled.Div  key={pokemon.key}>
                <div id="goBack">
                    <Link to="/">Back</Link>
                </div>
                <div id="imgContainer">
                    <img src={pokemon.image_url}/>
                    {user? (<button onClick={handleFav}>Fav</button>):(<></>)}
                </div>
                <div id="infoContainer">
                    <h2>{pokemon.number}: {pokemon.name}</h2>
                    <p>Type: {pokemon.kind}</p>
                    <p>Weight: {pokemon.weight/10}Kg  Height: {pokemon.height/10}m</p>
                </div>
            </styled.Div>
            )
            :
            <p>Carregando</p>
        }
        </>
    )
} 