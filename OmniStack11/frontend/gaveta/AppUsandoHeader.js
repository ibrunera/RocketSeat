import React, {useState} from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] =useState(0);
  
  function increment(){
    setCounter(counter +1);
  }

  return (
    //jsx javascript xml - html dentro do js
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>

    </div>
  );
}

export default App;
