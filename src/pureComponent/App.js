import React, { Component } from 'react'
import NormalCompo from './NormalCompo'
import PureCompo from './PureCompo'

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
    handle=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>MY COUNTAR VALUE IS  -: {this.state.count} </h1>

        <button onClick={this.handle}>Increment</button>

        <NormalCompo val1={this.state.count} />
        <PureCompo val1={this.state.count} />
      </div>
    )
  }
}

export default App
