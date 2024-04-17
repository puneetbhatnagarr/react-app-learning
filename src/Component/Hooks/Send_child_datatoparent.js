import React from 'react'

function Send_child_datatoparent(props) {
    const data = { name:'ram',email:"ram@gmail.com"}
  return (
    <div>
      <h1>Send_child_datatoparent</h1>
      <button onClick={()=>props.alert(data)}>click me</button>
    </div>
  )
}

export default Send_child_datatoparent
