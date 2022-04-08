import React from "react";

const FoodItem = ({ data, handleModif, handleDelete, handleFoodInput, handlePriceInput, InputtoggleModif }) => (
  <tr>
  {console.log(data)}
    <td>{data.food}</td>
    <td>{data.price}</td>
    <td>
      <button onClick={handleModif(data.id)}>Modify</button>
      <button onClick={handleDelete(data.id)}>Delete</button>
    </td>

  </tr>
);

export default FoodItem;
