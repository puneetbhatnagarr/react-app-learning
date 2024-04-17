import React from 'react'

function ArrayList_with_mapFunction() {
    const student = [
        { name: "anil", email: "ram@gmail.com", phone: 111 },
        { name: "ram", email: "ram@gmail.com", phone: 111 },
        { name: "raj", email: "ram@gmail.com", phone: 7478784 },
        { name: "anil", email: "ram@gmail.com", phone: 7478784 },
      ]
  return (
    <div>
      <table className='table table-bordered'>
      <thead>
        <th>
            Name
        </th>
        <th>
            Email
        </th>
        <th>
            Number
        </th>
        <tbody>
            {
                student.map((data,i)=>
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                </tr>

                )
            }
        </tbody>
      </thead>

      </table>
    </div>
  )
}

export default ArrayList_with_mapFunction
