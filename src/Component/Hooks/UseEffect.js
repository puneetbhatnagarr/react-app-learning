import React, { useEffect, useState } from 'react'
// useEffect is use for get the data from api
function UseEffect() {
  const[count,setCount]=useState(100);
  const[data,setData]=useState(10);
 useEffect(()=>{
  console.warn("called with data state")
 },[data]) // bydefault call componentdidMount one time chalege
 useEffect(()=>{
  console.warn("count is" + count) 
 },[count]) // componentdidUpdate 

return (
   <>
    <h1>useEffect for count : {count}</h1><br></br>
    <button  onClick={()=>setCount(count+1)}>count button</button><br></br>

    <h1>useEffect for data : {data}</h1><br></br>
    <button onClick={()=>setData(data+1)}>data button</button>

   </>
  )
}

export default UseEffect
