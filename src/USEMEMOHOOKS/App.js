import React, { useCallback, useEffect, useState } from 'react'
import ChildCompo from './ChildCompo'

const App = () => {
    const[random,setRandom]=useState(Math.random())
    const [countar,setCountar]=useState(1)

    useEffect(()=>{
       setInterval(()=>{
        setRandom(Math.random().toFixed(2))
       },2000)
    },[])


    // const handle=()=>{
    //   setCountar(countar+1)
    // }

    const handle=useCallback(()=>{
        setCountar(countar+1)
      },[countar])


  return (
    <div>
      <h1>MY RANDOM VALUE IS :- {random} </h1>

      <ChildCompo  count={countar}  handle={handle} />
    </div>
  )
}

export default App
