import React from "react";
class ClassCompo extends React.Component{
    constructor(props){
        super(props)
        this.state={
       count:"abcd"
        }
    }

    handlechange=()=>{
        this.setState({
            count:"xyz"
        })
    }
    render(){
        return(
            <>
            <h2>MY COUNTAR VALUE IS :- {this.state.count} </h2>
            <button onClick={this.handlechange}>increment</button>
            <h1>CLASS COMPONENT  {this.props.value} </h1>
            </>
        )
    }
}
export default ClassCompo