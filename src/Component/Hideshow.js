import React, { useState } from 'react'

function Hideshow() {
    const [status, setStatus] = useState(true)
    return (
        <>
            <h1>Hide show Toggle</h1>
            {
                status ? <h1>Hello Sir</h1> : null
            }
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(!status)}>toggle</button>
        </>
    )
}

export default Hideshow
