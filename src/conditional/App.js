import React from 'react'
import ConditionalCompo from './ConditionalCompo'
import LogicalCompo from './LogicalCompo'
let car=['bmw','abc','audi']
function App(){
    return(
        <>
        {/* <ConditionalCompo val={true} /> */}
        <LogicalCompo cars={car} />
     
        </>
    )
}
export default App