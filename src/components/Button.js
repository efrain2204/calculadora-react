import React from "react";
import '../style-sheets/Button.css';

function Button(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  return(
    <button
      className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trim()}
      onClick={ () => props.manejarClic(props.children)}>
      {props.children}
    </button>
  );
}
export default Button;
