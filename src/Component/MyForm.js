import React, { useState, useParams } from "react";

function MyForm() {
  let {id} = useParams()
  const [name,setName]=useState();
  const [college,setCollege]=useState();
  const [checkbox,setCheckbox]=useState();
  function getFormdata(e){
    console.log(name,college,checkbox)
    // refresh na ho issliye
    e.preventDefault()
  }
  return (
    <div>
      <h1>Form {id}</h1>
      <div className="container">
        <div className="row">
          <div className="col md-4">
            <form onSubmit={getFormdata}>
              <div className="mb-3">
                <label>Name</label>
                <input onChange={(e)=>setName(e.target.value)} type="text" name="name" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label>College</label>
                <select className="form-control" onChange={(e)=>setCollege(e.target.value)} name="college">
                  <option>Select Here</option>
                  <option value="mits">Mits</option>
                  <option value="itm">Itm</option>
                  <option value="rjit">Rjit</option>
                </select>
              </div>
              <div className="mb-3">
                <input value='hello' onChange={(e)=>setCheckbox(e.target.value)} type="checkbox"></input>
              </div>
              <button className=" btn btn-info " type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
