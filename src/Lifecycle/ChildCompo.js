import React, { useEffect } from 'react'

const ChildCompo = () => {
    useEffect(()=>{
        console.log("WELCOME TO MY COMPONENT")
        return ()=>{
            console.log("BY BY I'm OUT")
        }
    },[])
  return (
    <div>
      <h1>CHILD COMPONENT</h1>
    </div>
  )
}

export default ChildCompo
