import React, { memo } from 'react'

const ChildCompo = (props) => {
    console.log("CHILD COMPONENT")
  return (
    <div>
      <h1>Child value is  {props.count} </h1>
      <button onClick={props.handle}>increment</button>
    </div>
  )
}

export default memo(ChildCompo)
