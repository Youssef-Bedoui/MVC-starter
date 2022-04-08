import React from 'react';
import ReactDOM from 'react-dom';
import css from "../public/style.css"
import axios from "axios";
import $ from "jquery"
import Navbar from './components/navbar.jsx';
import Inputs from './components/inputs.jsx';
import FoodList from './components/foodList.jsx';


function Menu() {

  const [foodData, setfoodData] = React.useState([]);
  const [foodInput, setfoodInput] = React.useState("");
  const [priceInput, setpriceInput] = React.useState("");
  const [toggleModif, settoggleModif] = React.useState(false);

  React.useEffect(() => {
    axios.get("/menu/getAll")
      .then(result => {
        setfoodData(result.data);
      })
  }, []);

  //handle Inputs
  const handleFoodInput = (e) => {
    setfoodInput(e.target.value);
  }
  const handlePriceInput = (e) => {
    setpriceInput(e.target.value);
  }
  const handleCreate = (iteme) => {
    axios.post("/menu/add", { food: foodInput, price: priceInput })
      .then(response => setfoodData([...foodData, { food: foodInput, price: foodInput }]))
  }
  // handle Modif & delete
  const handleModif = (id) => {
    console.log("");
  }
  const handleDelete = (id) => {
    console.log(id)
    axios.delete(`menu/delete/${id}`)
      .then((response) => { setfoodData(foodData.filter((item) => item.id !== id)) })

  }
  //handleToggleModif
  const hundleToggle = () => {

  }
  return (
    <div>
      <Navbar />
      <div id='inputsDiv'>
        <Inputs handleFoodInput={handleFoodInput}
          handlePriceInput={handlePriceInput}
          handleCreate={handleCreate} />
      </div>

      <div id="content">
      <h3 id='dashboard'>DASHBOARD</h3>
        <FoodList foodData={foodData}
          handleModif={handleModif}
          handleDelete={handleDelete}
          toggleModif={toggleModif}
          handleFoodInput={handleFoodInput}
          handlePriceInput={handlePriceInput}
        />
      </div>

    </div>)


}
ReactDOM.render(<Menu />, document.getElementById('app'));