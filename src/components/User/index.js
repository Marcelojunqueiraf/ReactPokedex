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
            const response = await axios
            .get("https://pokedex20201.herokuapp.com/users/"+user)
            const fetchedPokemons = response.data.pokemons
            setPokemons(Object.values(fetchedPokemons))
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
            <Link to="/">Back</Link>
        </div>
        <h2>{user}</h2>
            <styled.Ul>
                {pokemons.map(pokemon => <><PokemonIcon key={pokemon.id} pokemon={pokemon}/> <button onClick={event => handleUnfav(pokemon)}>Unfav</button></>)}
            </styled.Ul>
        </div>
    );
    }

