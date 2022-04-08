import React from 'react';
import Navbar from './navbar.jsx';
const ModifPage = () => (
    <div>
        <Navbar />
        <div id="content" style={{"margin-top":"50px"}}>
            <div id='modifContainer'>
                <h3 id='dashboard'>Modify</h3>
                <input id="modifFood" type="text" placeholder="Modif Food..."></input>
                <input id="modifPrice" type="number" placeholder="Set new Price..."></input>
                <button id="saveModifBtn">Save Change</button>
            </div>

        </div>
    </div>
)


export default ModifPage;