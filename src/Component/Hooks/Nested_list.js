import React from "react";


function Nested_list() {
  const user = [
    {
      name: "anil",
      email: "ram@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "Indai" },
        { Hn: "34", city: "Gurgaon", country: "Indai" },
        { Hn: "40", city: "Delhi", country: "Indai" },
        { Hn: "90", city: "Noida", country: "Indai" },
      ],
    },
    {
      name: "anil",
      email: "ram@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "Indai" },
        { Hn: "34", city: "Gurgaon", country: "Indai" },
        { Hn: "40", city: "Delhi", country: "Indai" },
        { Hn: "90", city: "Noida", country: "Indai" },
      ],
    },
  ];
  return (
    <div>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th> Name</th>
            <th> Email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Table>
                  <tbody>
                    {data.address.map((data) => (
                      <tr>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
}

export default Nested_list;
