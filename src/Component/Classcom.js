import React, { Component } from 'react'

export default class Classcom extends Component{
    constructor(){
        super();
        this.state = {
            data : "puneet"
        }   
    }
    mpct(){
        this.setState({
            data : "Gwalior"
        })
    }
    render(){
        return(
            <div>
                {/* <h2>Hello Class Component {this.props.title}</h2> */}
                <h1>Class States {this.state.data}</h1>
                
<button className="btn btn-success" onClick={()=>this.mpct()}>Update Data</button>
            </div>
        )
    }
}
