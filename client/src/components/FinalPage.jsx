import React from "react";
import axios from "axios";


function FinalPage({ foodData }) {
  React.useEffect(() => {
    axios.get("/menu/getAll")
      .then(result => {
        setfoodData(result.data);
      })
  }, []);

  return (
    <div id="container">
      <table id="finalMenu">
        <thead>
          <th class="modifTh">FOOD</th>
          <th class="modifTh">Price (DT)</th>
        </thead>
        <tbody>
          {foodData.map((item, index) => (
            <tr key={index}>
              <td>{item.food}</td>
              <td>{item.price}</td>
            </tr>
          ))}

        </tbody>
        </table>
        <button id="printBtn" onClick={()=>{window.print()}}>SAVE MENU</button>
    </div>
  )



}

export default FinalPage;
