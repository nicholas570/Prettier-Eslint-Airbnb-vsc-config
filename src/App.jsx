import React from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test text="Well done dude" pre="pre-commit working :)" />
      </header>
    </div>
  );
}

export default App;
