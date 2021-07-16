import Electricity from './Electricity'
import Heat from './Heat'
import Commute from './Commute'
import "./Calculate.css"

import React, { useState, useEffect } from 'react';

export default function Display(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const[electricity, setElectricity] = useState(0)
  const[heat, setHeat] = useState(0)
  const[commute, setCommute] = useState(0)

  
  useEffect(() => {
    setElectricity(parseInt(localStorage.getItem("Electricity")))
    setHeat(parseInt(localStorage.getItem("Heat")))
    setCommute(parseInt(localStorage.getItem("Commute")))
    console.log(electricity,heat,commute)

  }, [count, heat, commute]);

  return (
    <div className = {"Stats-Container"}>
      <div className= {"Carbon-Data"}>
        <ul>
            <li>Electricity: {electricity || 0}</li>
            <li>Heat: {heat || 0}</li>
            <li>Commute: {commute || 0}</li>
        </ul>

      </div>
       
  
       
      {(electricity&&heat&&commute)? <h1>Your Total: {electricity+heat+commute}</h1>: <h1>{count}</h1>}
    

    
      <button onClick={() => setCount(count+(electricity|| 0)+(heat ||0)+(commute|| 0))}>
        Update
      </button>
    </div>
  );
}