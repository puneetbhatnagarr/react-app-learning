import React, { Component } from 'react'

export default class Rendermethod extends Component {
    constructor(){
        console.log('hello bhai')
        super();
        this.state = {
            data:"raju"
        };
    }
  render() {
    console.log('hello render')
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.setState({data:'raj'})}>State Update</button>
      </div>
    )
  }
}
