import { useState } from "react";


function State() {
    const [count, setcount] = useState(0);
    return (
        <div>
<h1>your clicked  {count} times   </h1>
<button className="btn btn-primary" onClick={() => setcount(count + 1)} > 
             click me  
            </button>

        </div>
    )
}


export default State;