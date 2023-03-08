
import './App.css';
import React from 'react'
import { Mensajero } from './components/mensajero/Mensajero.jsx';
import { Hola } from './components/mensajero/mensaje/Mensaje.jsx';

function App() {
  
  let nombre = prompt('Por favor ingrese su nombre')
  
  
  return (
    
    


    <div className="App">
     <Mensajero>
      <Hola nombre= {nombre} saludo="Hello"></Hola>
      <Hola nombre= {nombre} saludo="Danke"></Hola>
      <Hola nombre= {nombre} saludo="Ni hao"></Hola>
     </Mensajero>
     
        
    </div>
  );
}

export default App;
