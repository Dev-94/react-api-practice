import React from 'react';
import './App.css';
import Joke from './Components/Jokes';
import Animals from './Components/Animals';

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>
      <Joke />
      <Animals />
    </div>
  );
}

export default App;
