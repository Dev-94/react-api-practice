import React from 'react';
import './App.css';
// import Koala from './Components/Koala';
import Practice from './Components/Practice';
import Jokes from './Components/Jokes'
import Images from './Components/Images'

function App() {
  return (
    <div className="App">
      {/* ready for react hook api */}
      <Jokes />
      {/* <Koala /> */}
      <Practice />
      <Images />
    </div>
  );
}

export default App;
