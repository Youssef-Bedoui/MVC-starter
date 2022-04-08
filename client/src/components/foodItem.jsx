import React from "react";

const FoodItem = ({ data, handleModif, handleDelete }) => (
  <tr>
    {console.log(data)}
    <td>{data.food}</td>
    <td>{data.price}</td>
    <td>
      <button id="modifBtn" onClick={() => handleModif(data.id)}>Modify</button>
      <button id="deleteBtn" onClick={() => handleDelete(data.id)}>Delete</button>
    </td>

  </tr>
);

export default FoodItem;
