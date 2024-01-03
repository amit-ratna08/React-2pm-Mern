import React, { useContext } from 'react'
import { fname,lname } from '../App'

const CompoB = () => {
    let res=useContext(fname)
    let res1=useContext(lname)
  return (
    <div>
     <h1>MY NAME IS {res} and {res1} </h1>

    </div>
  )
}

export default CompoB
