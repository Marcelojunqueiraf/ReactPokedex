import styled from "styled-components";

export const Div = styled.div`
    padding-top:40px;
    display:flex;
    justify-content: center;
    border-left:auto;
    border-right:auto;
    padding-left:10px;
    padding-right:10px;
    #imgContainer{
        display:flex;
        flex-direction:column;
        background:lightgray;
        margin: 20px;
        border-radius:25px;
        button{
            align-self:center;
            width: 50%;
        }
    }
    #infoContainer{
        justify-content:space-evenly;
        background:lightblue;
        padding-left:20px;
        padding-right:20px;
        border-radius:25px;
    }
    #goBack{
        background:#282c34;
        color: white;
        height: fit-content;
        padding:5px;
        border-radius:10px;
    }
    a{
        color: white;
    }
`