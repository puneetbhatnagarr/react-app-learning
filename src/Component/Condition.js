import React, { useState } from 'react'

function Condition() {
    const [loggedin,setLoggedin]=useState(2);
  return (
    <div>
      <h4>condition</h4>
      {
        loggedin?<h3>Welcome User</h3>
        :<h2>welcome guest</h2>
      }

      {
        loggedin == 1?
        <h4>Welcome user one</h4>
        : loggedin == 2?
        <h4>welcome use two</h4>
        :loggedin == 3?
        <h4>welcome user three</h4>
        :<h4>Invalid</h4>
      }
    </div>

  )
}

export default Condition
