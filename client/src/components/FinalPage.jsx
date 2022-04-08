import React from "react";
import FoodItem from "./foodItem.jsx";

const FinalPage = ({ foodData, handleDelete, handleModif }) => (
  <table>
    <thead>
      <th>FOOD</th>
      <th>Price $</th>
    </thead>
    <tbody>
      {foodData.map((item, index) => (
        <FoodItem index={index} data={item} handleDelete={handleDelete} handleModif={handleModif} />

      ))}

    </tbody>
  </table>
);

export default FinalPage;
