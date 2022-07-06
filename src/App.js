import './App.css';
import Button from './components/Button';
import Pantalla from "./components/Pantalla";
import ButtonClear from "./components/ButtonClear";
import {useState} from "react";
import {evaluate} from 'mathjs';

function App() {
  const [input, setInput]= useState('');

  const agregarInput = val => {
    setInput(input + val);
  };
  const calcularResultado = () =>{
    if(input)
      setInput(evaluate(input))
    else
      alert('Inrtese valores');
  };

  return (
    <div className='App'>
      <div className="contenedor-calculadora">
        <h3 className='title'>Calculadora con MathJS</h3>
        <Pantalla input={input}/>
        <div className="fila">
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear manejarClear={ ()=> setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
