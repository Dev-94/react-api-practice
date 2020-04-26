import React from 'react';
import './App.css';
import Joke from './Components/Jokes';
import Animals from './Components/Animals';

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>
      <h3><Joke /></h3>
      <Animals />
    </div>
  );
}

export default App;
