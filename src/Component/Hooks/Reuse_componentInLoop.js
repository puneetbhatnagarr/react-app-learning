import React from 'react'

function Reuse_componentInLoop(props) {
  return (
    <div>
      <h1>reuse Reuse_componentInLoop</h1>
      <h3>{props.item.name}</h3>
      <h3>{props.item.email}</h3>
      <h3>{props.item.phone}</h3>
    </div>
  )
}

export default Reuse_componentInLoop
