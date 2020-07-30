import React,{useState} from 'react';
import styled from 'styled-components'
import Presupuesto from './components/Presupuesto'
import AdministrarPresupuesto from './components/AdministrarPresupuesto'
import shortid from 'shortid'
const AppStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
  font-family: 'Raleway', sans-serif;
  font-size: 4.8rem !important ;
  font-weight: 300;
  color: white;
  text-align: center;
}
`

function App() {
  const [presupuesto,setPresupuesto]= useState({
    presupuesto: null,
    restante: null
  })
  const [list,setList] = useState([])

  const addPresupuesto= presupuesto => {
    setPresupuesto({presupuesto, restante: presupuesto})
  }

  const deleteList = (id,value) => {
    const newList = list.filter((lista)=> lista.id !== id)
    setList(newList)
    setPresupuesto({...presupuesto,restante: presupuesto.restante+parseInt(value)})
  }

  const AdminPresupuesto = values => { 
     if(presupuesto.restante >= parseInt(values.cantidad))
     {
       values={...values, id: shortid.generate()}

       setPresupuesto({...presupuesto,restante: presupuesto.restante-parseInt(values.cantidad)})
       setList([...list,values])
     }
     
 
     
  }
 


  return (
    <AppStyled >
     <h1>  Gasto Semanal </h1>
     {presupuesto.presupuesto > 0 ? <AdministrarPresupuesto deleteList={deleteList} presupuesto={presupuesto} list={list} AdminPresupuesto={AdminPresupuesto} />  : <Presupuesto  addPresupuesto={addPresupuesto}/> }
     
     
    </AppStyled>
  );
}

export default App;
