import * as styled from "./styles"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function PokemonIcon({pokemon}){
    
    const types = pokemon.kind.split(';');
    return (
    <styled.Li key={pokemon.key}>
        <Link to={`/pokemon/${pokemon.name}`}>
            <div>
            <h2>{pokemon.number}: {pokemon.name}</h2>
            <img src={pokemon.image_url}/>
            </div>
        </Link>
    </styled.Li>
    )
} 