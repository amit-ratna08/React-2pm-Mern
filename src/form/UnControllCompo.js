import React, { useRef } from 'react'

const UnControllCompo = () => {
    const inputref=useRef()



    function handleclick(e){
        e.preventDefault()
      console.log(inputref.current.value)

      var res= document.getElementById("second").value
      console.log(res)
    }
  return (
    <div>
      <form onSubmit={handleclick}>

        <label>FIRST NAME :</label>
        <input type='text'  ref={inputref} placeholder='Enter a name'  />
        <br />
        <br />
        <input type='text' id='second'  placeholder='Enter a second name'  />
        <br />
        <br />
        <button >submit</button>
      </form>
    </div>
  )
}

export default UnControllCompo
