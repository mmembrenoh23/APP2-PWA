import React from 'react';

const Resultado = (props) => {

  const { operacion, input1, input2 } = props;
  let resultado = 0;

  switch(true){
    case operacion ==="Suma":
        resultado = input1 + input2; 
        break;
    case operacion === "Resta":
        resultado = input1 - input2;
        break;
    case operacion === "Multiplicacion":
        resultado = input1 * input2;
        break;
    case operacion === "Division":
        resultado = input1 / input2;
        break; 
    default: resultado  = 0; break;
  }

  return <div>
       <br/>
       <span>{ operacion }: { resultado }</span>
  </div>;
};

export default Resultado;
