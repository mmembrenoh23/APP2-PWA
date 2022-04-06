import {React, useState} from 'react'
import NumberInput from './NumberInput'
import Resultado from './Resultado'

const Calculadora = () => {
    const [numero1, setNumber1] = useState(0)
    const [numero2, setNumber2] = useState(0)   
    
    return (
        
        <div>
            <NumberInput {
                ...{
                    name:"Numero 1",
                   ...{setNumber1}
                }
            } /> <br />
            
            <NumberInput {
                ...{
                    name:"Numero 2",
                   ...{setNumber2}
                }
            } />            
            <Resultado {
                ...{ operacion: "Suma", input1:numero1, input2:numero2 }
                }
             />

            <Resultado {
                ...{ operacion: "Resta", input1:numero1, input2:numero2 }
                }
             />

            <Resultado {
                ...{ operacion: "Multiplicacion", input1:numero1, input2:numero2 }
                }
           />
            <Resultado {
                ...{ operacion: "Division", input1:numero1, input2:numero2 }
                }
            />
        </div>
    )
}

export default Calculadora
