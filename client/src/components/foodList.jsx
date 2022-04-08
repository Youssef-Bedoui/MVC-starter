import React from 'react';
import FoodItem from './foodItem.jsx';

const FoodList = ({ foodData, handleDelete, handleModif, InputtoggleModif }) => (

  <table>
    <thead>
      <th>Name</th>
      <th>Price $</th>
      <th>Action</th>
    </thead>
    <tbody>
      {foodData.map((item, index) => (
        <FoodItem index={index} data={item} handleDelete={handleDelete} handleModif={handleModif} InputtoggleModif={InputtoggleModif} />

      ))}

    </tbody>
  </table>
)


export default FoodList;