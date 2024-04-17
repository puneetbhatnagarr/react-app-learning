import React from 'react'
import { data } from '../../App'
function ChildC() {
    return (
        <>
            <h1>Child__c </h1>
            <data.Consumer>
            {
                (name)=>{
                   return(
                    <h1>
                        My Name:{name}
                    </h1>
                   ) 
                }
            }
            </data.Consumer>


        </>

    )
}

export default ChildC
