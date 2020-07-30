import React,{useState} from 'react'
import styled from 'styled-components'

const AddlistStyled = styled.div`
text-align: left;
input{
    width: 100%;
}
span{
    font-weight: bold;
}
button{
    background: linear-gradient(to right, #004e92, #000428);
    width: 100%;
    min-height: 40px;
    line-height: 20px;
    font-weight: bold;

    color: rgba(255,255,255,0.8);
     padding: 10px;
    margin-top: 30px;
    margin-bottom: 50px;
    border: none;
    border-radius: 3px;
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
    margin-bottom: 5px;
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0px 3px 3px rgba(0,0,0,.3)
}

`

export default function AddList({AdminPresupuesto}) {

    const [value,setValue] = useState(false)
   const [values,setValues] = useState({

       nombre: '',
       cantidad: ''

   })
       
   const ChangeValue= e => {

    setValues({...values, [e.target.name] : e.target.value })
 

   }
   const handleButton = e => {
     e.preventDefault();
     
     if(parseInt(values.cantidad) > 0 && values.nombre.trim() && !parseInt(values.nombre)){
         const valuestotal= {nombre: e.target.nombre.value , cantidad: parseInt(e.target.cantidad.value)}

          AdminPresupuesto(valuestotal)

     setValues({

        nombre: '',
        cantidad: ''
 
    })
    setValue(false)
    return;
     }
     
         setValue(true)
     
    
   }

    return (
        <AddlistStyled>
            <h2>Agrega tus gastos aqui</h2>
            { value ? <p>ERROR: Ingrese un valor valido</p> : null }
            <form onSubmit={handleButton}>
                <span>Nombre Gasto</span>
                <input onChange={ChangeValue} name="nombre" value={values.nombre} type="text"  placeholder="Ej. Comida"/>
                <span> Cantidad Gasto </span>
                <input type="text" onChange={ChangeValue} value={values.cantidad} name="cantidad" placeholder="El. 300" />
                <button type="submit"> AGREGAR GASTOS </button>
                 </form> 

        </AddlistStyled>
    )
}
