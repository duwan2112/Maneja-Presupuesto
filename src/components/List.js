import React,{useEffect,useState} from 'react'
import styled from 'styled-components' 
import List2 from  './List2'

const ListStyled = styled.div`
p{
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 10px; 
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0px 3px 3px rgba(0,0,0,.2);
    text-align: left;
}
p.presupuesto{  
    color: #004085;   
    background: #cce5ff;
}
p.restante{  
    color: #155724;   
    background: #d4edda;
}
p.danger{
    color: #721c24;
  background-color: #f8d7da;
}
p.warning{color: #856404;
  background-color: #fff3cd;}



`

export default function List({list,presupuesto,deleteList}) {
  const [value,setValue]=useState(presupuesto.presupuesto)
useEffect(()=>{
    setValue(presupuesto.restante)
},[presupuesto])

    return (

        <> 
        <ListStyled presupuesto={presupuesto}>

           
            <h2>Listado</h2>
            
            {list.length > 0 ? list.map((lista)=> <List2 deleteList={deleteList} key={lista.id} lista={lista}/>  ) : null }
            <hr/>
          <p className="presupuesto">Presupuesto: $ {presupuesto.presupuesto}</p>
          <p 
          className={presupuesto.restante >= presupuesto.presupuesto/1.4 ? "restante" : (presupuesto.restante > presupuesto.presupuesto/3 ? "restante warning" : "restante danger") }> 
          Restante: $ {value}
           </p> 


        </ListStyled>
        </> 
    )
}
