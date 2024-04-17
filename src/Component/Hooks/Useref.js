import React, { useRef } from 'react'

function Useref() {
  let inputRef = useRef(null)

  function controlinput(){
    inputRef.current.value = '150'
    inputRef.current.style.backgroundColor='yellow'
    inputRef.current.style.color='grey'

  }
 
  return (
    <div>
      <h1>useref</h1>
      <input type='text' ref={inputRef}></input>
   <button onClick={controlinput}>click me</button>
    </div>
  )
}

export default Useref
