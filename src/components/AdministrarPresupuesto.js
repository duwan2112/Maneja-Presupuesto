import React from 'react'
import styled from 'styled-components'
import AddList from './AddList'
import List from './List'
const AdministrarPresupuestoStyled = styled.div`

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

`
export default function AdministrarPresupuesto({AdminPresupuesto,list,presupuesto,deleteList}) {
    return (
        <AdministrarPresupuestoStyled className="row"> 
        <div className="one-half column"> <AddList AdminPresupuesto={AdminPresupuesto}/>  </div>
        <div className="one-half column"> <List deleteList={deleteList} presupuesto={presupuesto} list={list}/>  </div>
            
        </AdministrarPresupuestoStyled>
    )
}
