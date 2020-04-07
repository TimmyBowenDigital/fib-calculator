import React from 'react';
import './App.css';
import InputForm from "./components/valueInputForm/InputForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <h1>Fibonacci Calculator</h1>
              <p>Enter in an integer value into the form below and receive back the value in the fibonacci sequence corresponding to your input.</p>
              <InputForm />
          </div>

      </header>
    </div>
  );
}

export default App;
