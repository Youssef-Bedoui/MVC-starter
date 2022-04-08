import React from 'react';
import ReactDOM from 'react-dom';
import css from "../public/style.css"
import axios from "axios";
import $ from "jquery"
import Navbar from './components/navbar.jsx';
import Inputs from './components/inputs.jsx';
import FoodList from './components/foodList.jsx';
import ModifPage from './components/modifPage.jsx';
import FinalPage from './components/FinalPage.jsx';


function Menu() {

  const [foodData, setfoodData] = React.useState([]);
  const [foodInput, setfoodInput] = React.useState("");
  const [priceInput, setpriceInput] = React.useState("");
  const [view, setview] = React.useState("menuList");

  React.useEffect(() => {
    axios.get("/menu/getAll")
      .then(result => {
        setfoodData(result.data);
      })
  }, []);

  const changeView = (view) => {
    setview(view)
  }
  const renderView = () => {
    if (view === "menuList") {
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
              handleFoodInput={handleFoodInput}
              handlePriceInput={handlePriceInput}
            />
          </div>
          <div class="wrapper" onClick={handleSubmit}>
            <div class="link_wrapper">
              <a>Generate Menu</a>
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>

          </div>
        </div>);
    } else if
      (view === "ModifPage") {
      return (
        <ModifPage/>
      )
    } else if
      (view === "FinalPage") {
      return (
        <FinalPage foodData={foodData}
          handleModif={handleModif}
          handleFoodInput={handleFoodInput}
          handlePriceInput={handlePriceInput} />
      )
    }
  }
  //handle Inputs
  const handleFoodInput = (e) => {
    setfoodInput(e.target.value);
  }
  const handlePriceInput = (e) => {
    setpriceInput(e.target.value);
  }
  const handleCreate = () => {
    axios.post("/menu/add", { food: foodInput, price: priceInput })
      .then(response => { setfoodData([...foodData, { food: foodInput, price: priceInput }]) })
  }
  // handle Modif & delete
  const handleModif = (id) => {
    changeView("ModifPage")
    console.log("");
  }
  const handleDelete = (id) => {
    console.log(id)
    axios.delete(`menu/delete/${id}`)
      .then((response) => { setfoodData(foodData.filter((item) => item.id !== id)) })

  }
  //handleSubmit
  const handleSubmit = () => {
    changeView("FinalfPage")
  }

  return (
    <div>{renderView("view")}</div>
  )
}
ReactDOM.render(<Menu />, document.getElementById('app'));