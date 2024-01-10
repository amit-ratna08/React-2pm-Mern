import  { useState } from 'react'

const useCountar = () => {
    const[count,setCount]=useState(1)


    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
  return [count,increment,decrement]
}

export default useCountar


