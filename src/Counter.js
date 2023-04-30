import React, { useState } from 'react';
import  './Counter.css';
function Counter() {
    const [counter , setCounter] = useState(0);
  return (
    <div className='container'>
        <h1>Counter App </h1>
        <p>{counter}</p>
        <button className='btn-add' onClick={()=>setCounter(counter+1)}>+</button>
        <button className='btn-remove' onClick={()=>setCounter(counter-1 || counter===0)}>-</button>
    </div>
  )
}

export default Counter;
