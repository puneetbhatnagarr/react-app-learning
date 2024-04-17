import React from 'react'
import ChildB from './ChildB'

function ChildA({name}) {
  return (
 
      <>
<h1>Child__a</h1>
<ChildB name={name} />
      </>
    
  )
}

export default ChildA
