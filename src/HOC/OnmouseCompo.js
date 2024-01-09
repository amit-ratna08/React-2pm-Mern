import React from 'react'
import IncrementCountarhoc from './IncrementCountarhoc'

const OnmouseCompo = (props) => {
  return (
    <div>
      <h1>ONMOUSECOMPO EVENT VALUE :-{props.countar} </h1>
      <button onMouseOver={props.handle}>onclick</button>

    </div>
  )
}

export default IncrementCountarhoc(OnmouseCompo)
