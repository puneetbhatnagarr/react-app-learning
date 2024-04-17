import React, { useEffect, useState } from 'react'

function Get_api_byJS() {
    const[user,Setuser] = useState([])

    useEffect(()=>{
       getList() 
    },[]) 
    // single time return hoga issliye useEffect use hota hai
    function getList(){
        fetch('http://localhost:3001/api/pn/admin/users').then((res)=>{
            res.json().then((data)=>{ // promise
                console.log(data)
                Setuser(data)
            }) 
        })
    }
    console.log(user)
    return (
  <>
 {/* <table className="table table-striped">
      <thead>
        <th>
            Name
        </th>
        <th>
            Email
        </th>
        <th>
            Role
        </th>
        </thead>
        <tbody>
            {
            user.map((data,id)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                </tr>

                )
            }
        </tbody>
    

      </table> */}
      <div className='mt-5'>
                <div className='container'>
                    <div className='mt-2 mb-2 add_btn'>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                               
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                               
                            </tr>
                        </thead>    
                        <tbody>
                        {
            user.map((data,id)=>
                <tr>
                   
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                </tr>

                )
            }
                        </tbody>                    
                    </table>
                </div>
            </div>
  </>
  )
}

export default Get_api_byJS
