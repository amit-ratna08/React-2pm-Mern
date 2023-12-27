import React from 'react'
import FunCompo from './FunCompo';
import ClassCompo from './ClassCompo';
let na="hdjshd"
let obkj={
  name:"abcd"
}
let arr=[1,2,3,4]
function App() {
  return (
    <div>
      <h1>hello app</h1>
     

     <FunCompo name={arr} />
     {/* <ClassCompo value={"hwh"} /> */}
    </div>
 
  );
}

export default App;
