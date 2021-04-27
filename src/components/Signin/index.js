import axios from "axios";
import { useContext, useState } from "react"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function SignIn(){
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState();
    const [userName, setUserName] = useContext(UserContext);

    if(redirect){
        return(
            <Redirect to={redirect}/>
        )
    }

    const handleSubmit = event =>{
        async function signin(){
            await axios.post('https://pokedex20201.herokuapp.com/users', {"username": name})
            .then(response => {
                setUserName(name)
                setRedirect("/")
            })
            .catch(error => {alert(error)})
        }
        event.preventDefault();
        signin()
    }

    return(
        <div className="App">
            <br/>
            <form onSubmit={handleSubmit}>
                <h2>Escolha seu nome de Usuário</h2>
                <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <button>Create User</button>
            </form>
            <br/>
            <Link to="/login">Já tem conta? faça Login</Link>
        </div>
    )
}