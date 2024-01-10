import React from 'react'
import useCountar from './useCountar'
const App = () => {
    const [count,increment,decrement]=useCountar()

   
  return (
    <div>
        <h1>MY COUNTAR VALUE IS {count} </h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      
    </div>
  )
}

export default App
