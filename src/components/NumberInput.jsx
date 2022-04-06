import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const NumberInput = (props) => {
    const {name, setNumber1, setNumber2} = props; 
    const [numeros, setNumeros] = useState(0);
    const handleChange = (e) =>{
        
        const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
        if(typeof(setNumber1) === "function")
        {            
            setNumber1(value);
        }
        if(typeof(setNumber2) === "function")
        {            
            setNumber2(value);
        }
        setNumeros(value)
    }
  return  (
      <Fragment>
          <label>
              {name} : <input value={parseInt(numeros)} onChange={ handleChange } type="number" />
          </label>
      </Fragment>
  );
}

NumberInput.propTypes = {
    name: PropTypes.string,
};

export default NumberInput;
