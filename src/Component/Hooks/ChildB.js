import React, { useContext } from 'react'
import {data} from '../../App'
function ChildB({name}) {
  const  name1 =useContext(data)
    return (
    <div>
    <h1>useContext {name1}</h1>
    </div>
  )
}

export default ChildB
