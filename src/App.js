import React from 'react'
import LiftingCompo from './Liftingup/LiftingCompo'

const App = () => {
    let name="rahul"


    function sum(ab){
        alert("hello"+ab)
    }
  return (
    <div>
      <LiftingCompo  data={sum} />
    </div>
  )
}

export default App
