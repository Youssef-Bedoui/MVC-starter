import React from 'react';

const Inputs = (props) => (
    <div>
        <input class="addInput" type="text" placeholder="Add FOOD..." onChange={props.handleFoodInput} />
        <input class="addInput" type="number" placeholder="PRICE..." onChange={props.handlePriceInput} />
        <button id="addButton" onClick={props.handleCreate}> + </button>
    </div>
)

export default Inputs;