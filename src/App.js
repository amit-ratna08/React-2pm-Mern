import React, { createContext } from 'react'
import CompoA from './contextapi/CompoA'


let fname=createContext()
let lname=createContext()
const App = () => {
  return (
    <div>
        <fname.Provider value={"HELLO"}>
            <lname.Provider value={"welcome"}>
               <CompoA  />

            </lname.Provider>

        </fname.Provider>
    </div>
  )
}

export default App
export {fname,lname}
