import React from 'react';

const Inputs = ({ handleCreate, handleFoodInput, handlePriceInput }) => (
    <div>
        <input class="addInput" type="text" placeholder="Add FOOD..." onChange={handleFoodInput} />
        <input class="addInput" type="number" placeholder="Add PRICE..." onChange={handlePriceInput} />
        <button id="addButton" onClick={handleCreate}> + </button>
    </div>
)

export default Inputs;