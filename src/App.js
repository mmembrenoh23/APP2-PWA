import React from 'react'
import Calculadora from './components/Calculadora'

const App = () => {
  return (
    <div>
      <h1> Hola mi app desde react </h1>
      <hr />
      <Calculadora />
    </div>
  )
}

export default App


/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/