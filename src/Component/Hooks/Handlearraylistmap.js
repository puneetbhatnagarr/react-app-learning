import React from 'react'

function Handlearraylistmap() {
    const students = [
        { name: "anil", email: "ram@gmail.com", phone: 111 },
        { name: "ram", email: "ram@gmail.com", phone: 111 },
        { name: "raj", email: "ram@gmail.com", phone: 7478784 },
        { name: "anil", email: "ram@gmail.com", phone: 7478784 },
        { name: "puneet", email: "ram@gmail.com", phone: 7440480417 },
  
    ]
  return (
    <div>
     <h1>Handle array with listmap</h1> 

    {/* <Table striped bordered hover>
      <thead>
        <tr>
       
          <th> Name</th>
          <th> Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
            students.map((data)=>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
        </tr>
            )
        }
          
      
       
      </tbody>
    </Table> */}
  

    </div>
  )
}

export default Handlearraylistmap
