import {useEffect, useState} from "react";
import axios from "axios"
import PokemonDisplay from "../PokemonDisplay"

function Pages() {
  const [pokemons, setPokemons] = useState([])

  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getPokemons(){
      await axios
      .get("https://pokedex20201.herokuapp.com/pokemons", {params: {page: page}})
      .then(response => setPokemons(Object.values(response.data.data)))
      .catch(error => alert(error))
  }
    getPokemons()
  },[page])

  return (
    <div className="App">
      <br/>
      <h2>Page {page}</h2>
      <button onClick={()=> {setPage(page-1)}}>previous</button>
      <input type="number" value={page} onChange={(event) => setPage(event.target.value)}></input>
      <button onClick={()=> {setPage(page+1)}}>next</button>
      <PokemonDisplay pokemons={pokemons}/>
    </div>
  );
}

export default Pages;
