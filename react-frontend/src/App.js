import React from 'react';
import ApiButtons from './ApiButtons';
import './App.css';


function App() {
  console.log(process.env.BACKEND_PORT)
  console.log(process.env.REACT_APP_BACKEND_PORT)
  return (
    <div className="App">
      <header className="App-header">
        <ApiButtons />
      </header>
    </div>
  );
}

export default App;
