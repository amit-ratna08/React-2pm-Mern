import React, { Component } from 'react'

const IncrementCountarhoc = (Compo) => {
  class AddCompo extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
    handleclick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
       return(
        <>
        <Compo  countar={this.state.count} handle={this.handleclick}  />
        </>
       )
    }
    
  }
  return AddCompo
}

export default IncrementCountarhoc
