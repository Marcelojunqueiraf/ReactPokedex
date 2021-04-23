import axios from "axios";
import { useContext, useState } from "react"
import { Redirect } from "react-router";
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
            setRedirect("/signin")
        })
        }
        loggin();
    }

    return(
        <div className="App">
            <br/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <button>login</button>
            </form>
        </div>
    )
}