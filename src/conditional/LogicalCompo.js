import React from 'react'

const LogicalCompo = (props) => {
    let result=props.cars
  return (
    <div>
      {
          result.length<4 && <h1>IN MY SHOWROOM {result[1]} CAR </h1>
      }
    </div>
  )
}

export default LogicalCompo
