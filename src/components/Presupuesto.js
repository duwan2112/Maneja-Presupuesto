import React,{useRef,useState} from 'react'
import styled from 'styled-components'

const PresupuestoStyled = styled.div`

background: white;
width: 80%;
border-radius: 20px;
text-align: center;
padding: 30px;
h2{
font-family: 'Raleway', sans-serif;
   
  font-weight: 400;
  color:#004e92;
  margin-bottom:30px;
  font-size:3rem!important;
  text-align: center;
}
input{
    width: 90%;
    height: 40px;
    border-radius: 5px;
    border: 2px solid rgba(0,0,0,.5);
    padding-left: 10px;
    color: rgba(0,0,0,0.7);

   
}
button{
    background: linear-gradient(to right, #004e92, #000428);
    width: 92%;
    min-height: 40px;
    line-height: 20px;
    font-weight: bold;

    color: rgba(255,255,255,0.8);
     padding: 10px;
    margin-top: 30px;
    margin-bottom: 50px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    &:focus{
        outline: none;
    }

}
p{
    color: #721c24;
    font-weight: bold;
    font-size: 1.5rem;
    background: #f8d7da;
    margin: 0; 
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0px 3px 3px rgba(0,0,0,.3)
}
`

export default function Presupuesto({addPresupuesto}) {

  const ref= useRef()
  const [value,setValue] = useState(false)
   const handleButton = e => {
     e.preventDefault();
     const value= parseInt(ref.current.value) 
     if(value > 0 ){
        addPresupuesto(value) 
        setValue(false)
     }
     else {
        setValue(true)
     }
     
     ref.current.value = null
   }


    return (
        <PresupuestoStyled>
            { value ? <p>ERROR: Ingrese un valor valido</p> : null }
            <h2> Coloca tu presupuesto</h2>
            <input ref ={ref} type="number" placeholder="Coloca tu presupuesto...  Ejemplo: 500" />
            <button onClick={handleButton}> DEFINIR EL PRESUPUESTO</button>
            
        </PresupuestoStyled>
    )
}
