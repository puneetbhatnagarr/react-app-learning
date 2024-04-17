import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        console.log('hello')
        super();
        this.state = {
            data:"ram"
        };
    }
  render() {
    console.log("hello render")
    return (
      <div>
        hello {this.state.data}
      </div>
    )
  }
}

