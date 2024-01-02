import React, { useEffect, useState } from 'react'
import ChildCompo from './Lifecycle/ChildCompo'

const App = () => {
  // const [count,setCount]=useState(1)
  const [toggal,setToggal]=useState(true)
  // useEffect(()=>{
  //  console.log("call in mounting phase")
  // },[])  // mounting phase

  // useEffect(()=>{
  //   console.log("call when  count state is updated")
  // },[count])  // updating phase

  return (
    <div>
      {/* <h1>MY COUNT VALUE IS {count} </h1>
      <button onClick={()=>setCount(count+1)}>increment</button> */}
{
toggal ? <ChildCompo /> :""

}
<button onClick={()=>setToggal(!toggal)}>SHOW | HIDE</button>


    </div>
  )
}

export default App
