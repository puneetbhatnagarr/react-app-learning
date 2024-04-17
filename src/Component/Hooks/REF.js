import React, {Component, createRef } from 'react'

export default class REF extends Component {
    constructor(){
        super()
        this.inputRef = createRef()
    }
    componentDidMount(){
        console.log(this.inputRef.current.value =  '1000');
        this.inputRef.current.style.color = 'red'
    } 
    getvalue(){
        this.inputRef.current.style.backgroundColor='yellow'
    }  
  render() {
    return (
      <div>
        <h1>Ref</h1>
<input type='text' ref={this.inputRef}></input>
   <button onClick={()=>this.getvalue()}>click me</button>
      </div>
    )
  }
}
