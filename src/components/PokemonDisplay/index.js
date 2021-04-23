import PokemonIcon from "../PokemonIcon"
import * as styled from "./styled"

export default function ({pokemons}){ 
    return(
        <styled.Ul>
            {pokemons.map(pokemon => <PokemonIcon key={pokemon.id} pokemon={pokemon}/>)}
        </styled.Ul>
    )
}