import React from 'react'
import styled from 'styled-components'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const List2Styled = styled.div`

display: flex; 
justify-content: space-between;
font-weight: bold;
padding: 10px;
align-items: center;
.cantidad{
    background-color: #004085;
  padding: 1rem;
  color:white;
}
.nombre{
    display: flex;
    flex-direction: row;
    align-items: center;
}
button{

     padding:0;
     border: none;
     color: #721c24;
     margin: 0;
     display: flex;
     flex-direction: row;
     align-items: center;
     margin-right: 5px;

}
button svg{
    cursor: pointer;
    font-size: 2.5rem;
    &:hover{
        color: #721c24;
        opacity: .5;
    }

}
`



export default function List2({lista,deleteList}) {

const handleButton= ()=> {

    deleteList(lista.id,lista.cantidad)
}

    return (
        <List2Styled>
             <span className="nombre"> <button onClick={handleButton}> <HighlightOffIcon></HighlightOffIcon> </button> {lista.nombre}.</span> <span className="cantidad">{lista.cantidad}</span> 
        </List2Styled>
    )
}
