import React from 'react';
import './App.css';
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className={"App-Form"}>
              <h1>Fibonacci Calculator</h1>
              <p>Enter an integer into the form below to calculate the corresponding value in the fibonacci sequence.</p>
              <InputForm />
          </div>
      </header>
    </div>
  );
}

export default App;
