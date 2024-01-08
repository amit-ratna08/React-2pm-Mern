import React, { useState } from 'react'

const ControllCompo = () => {
    const [username,setUsername]=useState()

    function handleclick(e){
   setUsername(e.target.value)

      console.log(e.target.value)
    }
  return (
    <div>
      <form>
        <label>NAME :</label>
        <input type='text'  placeholder='Enter a name'  onChange={handleclick} />
      </form>
    </div>
  )
}

export default ControllCompo
