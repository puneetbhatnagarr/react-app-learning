import React from "react";
function demo(){
    const data = [
        {
            id:1, name:'puneet'},
            {
            id:2, name:'akshat'},
            {
            id:3, name:'palak',}  
    ]
     return(
            <div>
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
export default demo