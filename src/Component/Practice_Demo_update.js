import React, { useState } from "react";

function Demo() {
  const [data, setData] = useState([
    { id: 1, name: 'puneet' },
    { id: 2, name: 'akshat' },
    { id: 3, name: 'palak' }
  ]);

  const addNewItem = () => {
    const newItem = { id: data.length + 1, name: 'riya' };
    setData([...data, newItem]); //(... spread operator) Create a copy of the existing data array
    //Add the new item to the copied array
  };

  return (
    <div>
      <button onClick={addNewItem}>Add New Item</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Demo;
