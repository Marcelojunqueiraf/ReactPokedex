import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Pages from "./components/Pages"
import PokemonInfo from "./components/PokemonInfo"
import { useState } from 'react';
import Login from "./components/Login"
import {UserContext} from "./components/UserContext"
import User from "./components/User"
import Signin from "./components/Signin"

function App() {
  const [userName, setUserName] = useState();

  return (
    <UserContext.Provider value={[userName, setUserName]}>
      <Router>
        <div>
          <header>
            <h1>Pokedex</h1>
            {userName?(
              <h2>Bem vindo, <Link to="/User">{userName}</Link></h2>
            ) :
            (<Link to="/login">Login</Link>)
            }
            <br/>
          </header>
          <Switch>
            <Route path="/pokemon/:name">
              <PokemonInfo/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signin">
              <Signin/>
            </Route>
            <Route path="/User">
              <User/>
            </Route>
            <Route path="/home">
              <Pages/>
            </Route>
            <Route>
              <Redirect to="/home"/>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
