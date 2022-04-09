import React from 'react';
import Navbar from './navbar.jsx';
import axios from 'axios';


const ModifPage = ({ saveModif, id }) => {

    const [foodValue, setfoodValue] = React.useState("");
    const [priceValue, setpriceValue] = React.useState("");

    React.useEffect(() => {
        axios.get(`menu/getOnefood/${id}`).then((response) => {
            // console.log(response.data)
            setfoodValue(response.data[0].food)
            setpriceValue(response.data[0].price)
        });
    }, []);

    const handleFoodModif = (e) => {
        setfoodValue(e.target.value)
    }
    const handlePriceModif = (e) => {
        setpriceValue(e.target.value)
    }

    return (
        <div id='modifpageback'>
            <Navbar />
            <div id="content" style={{ "margin-top": "50px" }}>
                <div id='modifContainer'>
                    <h3 id='dashboard'>Modify</h3>
                    <input value={foodValue} id="modifFood" type="text" placeholder="Modif Food..." onChange={handleFoodModif}></input>
                    <input defaultValue={priceValue} id="modifPrice" type="number" placeholder="Set new Price..." onChange={handlePriceModif}></input>
                    <button id="saveModifBtn" onClick={() => saveModif(foodValue, priceValue,id)}>Save Change</button>
                </div>
            </div>
        </div>
    )
}

export default ModifPage;