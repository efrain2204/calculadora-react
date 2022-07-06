import React from "react";
import '../style-sheets/ButtonClear.css';

const ButtonClear = (props) => (
  <button
    className='boton-clear'
    onClick={ props.manejarClear }>
    {props.children}
  </button>
);

export default ButtonClear;
