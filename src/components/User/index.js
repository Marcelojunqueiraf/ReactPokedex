import {useContext, useEffect, useState} from "react";
import axios from "axios"
import { UserContext } from "../UserContext";
import { Redirect} from "react-router";
import {Link} from "react-router-dom";
import * as styled from "./styles"
import PokemonIcon from "../PokemonIcon"

export default function User() {
    const [pokemons, setPokemons] = useState([])
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        async function getPokemons(){
            await axios.get("https://pokedex20201.herokuapp.com/users/"+user)
            .then(response => setPokemons(Object.values(response.data.pokemons)))
            .catch(error => alert(error))
    }
        getPokemons()
    },[user, pokemons])

    const handleUnfav = pokemon => {
        async function removeFav(){
            await axios.delete("https://pokedex20201.herokuapp.com/users/"+user+"/starred/"+pokemon.name)
            .then(response => {
                setPokemons([])
            })
            .catch(error => alert(error))
        }
        removeFav();
    }

    if(user == undefined){
        return(<Redirect to="/"/>)
    }

    return (
        <div className="App">
        <br/>
        <div id="goBack">
            <Link to="/">home</Link>
        </div>
        <h1>Seus Pokemons Favoritados:</h1>
            <styled.Ul>
                {pokemons.map(pokemon => <><PokemonIcon key={pokemon.id} pokemon={pokemon} fav={true} handleUnfav={handleUnfav}/> <br/></>)}
            </styled.Ul>
        </div>
    );
    }

