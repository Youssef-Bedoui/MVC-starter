import React from 'react';
import Navbar from './navbar.jsx';
const ModifPage = ({saveModif,handleFoodModif,handlePriceModif}) => (
    <div id='modifpageback'>
        <Navbar />
        <div id="content" style={{ "margin-top": "50px" }}>
            <div id='modifContainer'>
                <h3 id='dashboard'>Modify</h3>
                <input id="modifFood" type="text" placeholder="Modif Food..." onChange={()=>handleFoodModif}></input>
                <input id="modifPrice" type="number" placeholder="Set new Price..." onChange={()=>handlePriceModif}></input>
                <button id="saveModifBtn" onClick={() => saveModif}>Save Change</button>
            </div>

        </div>
    </div>
)


export default ModifPage;