import React, { Component } from 'react'
// render ke baad mai chalta h subse
// api ke liye use karege 
export default class Componentdidmount extends Component {
  constructor()
  {
      super();
      this.state={
          name:"raj",
          count:0


      }
      console.log("constructor")
  } 
   
  // componentDidMount()    //update hone par nahi chalta satate
  // {
  //     console.log("DidMount")
  // }
  // componentDidUpdate()   //state or props ke update hone ke bad hi chalega...
  // {
  //   console.log("componentDidUpdate")
  // } 
  componentDidUpdate(preProps,preState,snapshot)   //state or props ke update hone ke bad hi chalega...
  {
    console.log("componentDidUpdate",preState.count,this.state.count)
    // if(preState.count===this.state.count)
    // {
    //   alert("data is already same")
    // }
  } 
  render() {
    console.log("set component")
    return (
      <div>
        <h1>Components DidMount {this.state.name}</h1>
        <h1>Components DidMount {this.state.count}</h1>
        <button onClick={()=>{this.setState({name:"ram"})}}>Update Name</button>
        <button onClick={()=>{this.setState({count:1})}}>Update Name1</button>
      </div>
    )
  }
}
