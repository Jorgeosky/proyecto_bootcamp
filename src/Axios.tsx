import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface pokemon {
  name: string,
  url: string
}

function Pokemon(value: pokemon[]) {
  if (value !== null) {
    return <div>{value.map((element: pokemon) => { return <h1>{element.name}</h1> })}</div>
  }
}

function Axios() {
  const [data, setData] = useState<any | null>(null)
  useEffect(() => {
    if (data === null) {
      axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(function (response) {
          console.log(response.data.results);
          setData(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    }
  }, [data])

  return (
    <div>
      {Pokemon(data)}
    </div>
  );
}

export default Axios;
