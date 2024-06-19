import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from './Axios';
import { Link } from 'react-router-dom';

function DataPrint(value: number[]) {
  return <div>{value.map((element: number) => { return <h1>{element}</h1> })}</div>
}

function App() {
  const [data, setData] = useState<number[]>([1])
  const [counter, setCounter] = useState<number>(1)
  useEffect(() => {
    console.log("renderizado")
    if (data.length !== counter)
      // newData.concat(data);
      setData(data.concat(counter))
      console.log("asignamos")
      console.log(data)
  }, [counter, data])

  return (
    <div className="App">
      <header className="App-header">
        <Link to={`/signin/`}><h2 color='red'>inciar sesion</h2></Link>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
        {DataPrint(data)}
        <Axios />
      </header>
    </div>
  );
}

export default App;
