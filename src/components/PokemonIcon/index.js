import * as styled from "./styles"
import {Link} from "react-router-dom";

export default function PokemonIcon({pokemon, fav, handleUnfav}){
    return (
    <styled.Li>
        <Link to={`/pokemon/${pokemon.name}`}>
            <div>
            {fav? (
                <h2>{pokemon.number}: {pokemon.name}<button onClick={event => handleUnfav(pokemon)}>Unfav</button></h2>
            ): (
                <h2>{pokemon.number}: {pokemon.name}</h2>    
            )}
            <img alt={"Pokemon representation: "+pokemon.name}src={pokemon.image_url}/>
            </div>
        </Link>
    </styled.Li>
    )
} 