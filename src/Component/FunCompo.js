import React, { useState } from "react";
import '../App.css'



function FunCompo(props){
    let res=props.name
    const [count,setCount]=useState(1)

    // const handle=()=>{
    //     setCount(count+2)
    // }
    return(
        <>
        <h1 className="fun">   FUNCTIONAL COMPONENT</h1>
       <h2>Functional Component {count} </h2>
       {/* <button onClick={handle}>increment</button> */}

       <button onClick={()=>setCount(count+1)}>increment</button>

            <h1>MY DATA IS {res[2]} </h1>
        </>
    )
}
export default FunCompo