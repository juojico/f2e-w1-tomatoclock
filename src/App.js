import React from 'react';
import Tomato from './components/Tomato';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tomato className="App-logo" />
        <Timer />
      </header>
    </div>
  );
}

export default App;
