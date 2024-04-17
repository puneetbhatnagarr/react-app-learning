import React, { useState } from "react";
import '../App.css'
import { isButtonElement } from "react-router-dom/dist/dom";
function Demo() {
  const [data, setData] = useState([
    { id: 1, name: 'puneet' },
    { id: 2, name: 'akshat' },
    { id: 3, name: 'palak' }
  ]);

  const removeItem = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const heading = {
    fontSize:'72px',
    color:'gray',
    textAlign:'center'
  }
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="demo_style">puneet </h1>
      <h2 style={heading}>bhatnagar</h2>
      <h1 style={{ color: 'green' }}>hey</h1>
    </div>
  )
}

export default Demo;
