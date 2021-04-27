import axios from "axios";
import { useContext, useState } from "react"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login(){
    const [name, setName] = useState("");
    const [userName, setUserName] = useContext(UserContext)
    const [redirect, setRedirect] = useState();

    if(redirect){
        return <Redirect to={redirect}/>
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        async function loggin(){
        await axios.get("https://pokedex20201.herokuapp.com/users/"+name)
        .then(response => {
            console.log(response)
            setUserName(name)
            setRedirect("/")
        })
        .catch(error => {
            alert("Usuário inexistente. Redirecionando para página de Cadastro")
            console.log(error)
            setRedirect("/signin")
        })
        }
        loggin();
    }

    return(
        <div className="App">
            <br/>
            <form onSubmit={handleSubmit}>
                <h2>Digite seu nome de Usuário</h2>
                <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <button>login</button>
            </form>
            <br/>
            <Link to="/signin">Não tem conta? cadastre-se</Link>
        </div>
    )
}