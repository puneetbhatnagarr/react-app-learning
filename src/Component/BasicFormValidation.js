import React, { useState } from 'react'

function BasicFormValidation() {
    const [username,setUserName]=useState();
    const [password,setPassword]=useState();
    const [nameerr,setNameerr]=useState(false);
    const [passworderr,setPassworderr]=useState(false);

    

    function getFormdata(e){
        console.log(username,password)
        e.preventDefault()
    }
    function userHandler(e){
        e.preventDefault();
        let item = e.target.value
        if(item.length<3){
            console.warn("invalid");
            setNameerr(true)
        }else{
            setNameerr(false);
        }
    }
    function passwordHandler(e){
        e.preventDefault();
        let item = e.target.value
        if(item.length<3){
            console.warn("invalid Password");
            setPassworderr(true)
        }else{
            setPassworderr(false);
        }
    }
  return (
    <div>
    <h1>user Form</h1>
    <div className="container">
      <div className="row">
        <div className="col md-4">
          <form onSubmit={getFormdata}>
            <div className="mb-3">
              <label>UserName</label>
              <input  type="text"  className="form-control" onChange={userHandler}></input>{nameerr?<span>User not valid</span>: ""}
            </div>
            <div className="mb-3">
              <label>password</label>
              <input  className="form-control" onChange={passwordHandler}></input>{passworderr?<span>Password not valid</span>: ""}
            </div>
           
            <button className=" btn btn-info " type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BasicFormValidation
