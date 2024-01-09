import React from 'react'
import IncrementCountarhoc from './IncrementCountarhoc'
const OnclickCompo=(props)=>{
    // const[count,setCount]=useState(1)
    return(
        <>
        <h1>ONCLICK EVENT VALUE=:-{props.countar}  </h1>
        <button onClick={props.handle}>onclick</button>
        </>
    )
}
export default IncrementCountarhoc(OnclickCompo)