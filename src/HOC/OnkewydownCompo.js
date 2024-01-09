import React  from 'react'
import IncrementCountarhoc from './IncrementCountarhoc'

const OnkewydownCompo = (props) => {

  return (
    <div>
       <h1>ONKEYDOWN  EVENT VALUE :-{props.countar} </h1>
      <button onKeyDown={props.handle}>onclick</button>
    </div>
  )
}

export default IncrementCountarhoc(OnkewydownCompo)
