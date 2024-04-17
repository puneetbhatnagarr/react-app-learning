import React, { useState } from 'react'

function UseState() { // component
//   state loop ke ander kam nhi karta or nahi kisi function ke ander kam nhi krta
    const [count,setCount] = useState(0);
  
    function increment(){
        setCount(count+1)
        setCount(prevCount=>prevCount+1)
        
    }
    function decrement(){
        setCount(count-1)
        setCount(prevCount=>prevCount-1)
    }
  return (
    <div>
      <h1>
        use state
      </h1>
      {/* <button className='btn btn-info' onClick = {increment}>+</button>{count}<button className='btn btn-success' onClick={decrement}>-</button> */}
    {/* pre count */}
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    {count}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}

export default UseState
