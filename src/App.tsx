import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Button() {
  return (<button>componente button</button>);
}

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${count} times`;
    console.log("se ejecuto")
  }, [count2]);
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        dont Click me
      </button>
    </div>
  );
}

export default App;
