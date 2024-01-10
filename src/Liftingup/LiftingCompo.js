import React from 'react'

const LiftingCompo = (props) => {

let nam="Kumar"
  
  return (
    <div>
      {/* <h1>MY NAME IS {} </h1> */}
      <button onClick={()=>props.data(nam)}>click me</button>

    </div>
  )
}

export default LiftingCompo
