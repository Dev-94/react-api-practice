import React from 'react';
import './App.css';
import Joke from './Components/Jokes';
import Animals from './Components/Animals';

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>

      <span className="caption">The jokes are called from an API using a lifecycle method. The images are called from an API using hooks and TypeScript.</span>

      <h3><Joke /></h3>
      <Animals />
    </div>
  );
}

export default App;
