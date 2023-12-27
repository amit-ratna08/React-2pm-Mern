import React from 'react'

const Abc = () => {
    return (
        <>
            <h1>HELLO ABCD</h1>
        </>
    )
}

function Xyz() {
    return (
        <>
            <h2>HELLO XYZ</h2>
        </>
    )
}

const ConditionalCompo = (props) => {
    let res = props.val
    // if (res) {
    //     return <Abc />
    // } else {
    //     return <Xyz />
    // }
return(
    <>
    {
        res ? <Abc /> :<Xyz />
    }
    </>
)
    
}

export default ConditionalCompo
