import React, { useState } from "react";
// State se update hota hai component ke andar (render krne ke liye)
function StateOne() {
    const [data,updateData]= useState('ram');
    // let data = "Shree Ram";
    function itm() {
        updateData('rahual')
        // let data = 'raj';
  
    }
    console.log('==============================')
    return (
        <div>
            <h1> data: {data}</h1>
            <br></br>
            <button className="btn btn-outline-info" onClick={itm}>
                Press Me
            </button>
            <br></br>
            <button className="btn btn-outline-warning" onClick={() => itm()}>
                Hit Me
            </button>
        </div>
    );
}

export default StateOne;
