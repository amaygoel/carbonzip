import Electricity from './Electricity'
import Heat from './Heat'
import Commute from './Commute'

import React, { useState, useEffect } from 'react';

export default function Display(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(null);
  const[electricity, setElectricity] = useState(null)
  const[heat, setHeat] = useState(null)
  const[commute, setCommute] = useState(0)
  useEffect(() => {
    setElectricity(parseInt(localStorage.getItem("Electricity")))
    setHeat(parseInt(localStorage.getItem("Heat")))
    setCommute(parseInt(localStorage.getItem("Commute")))
    console.log(electricity,heat,commute)

  }, [count, heat]);

  return (
    <div>
        <h1>Your Total: {electricity+heat+commute}</h1>
        {/* <h2>Electricity: {parseInt</h2> */}

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}