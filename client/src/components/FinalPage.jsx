import React from "react";
import ReactToPrint from "react-to-print";

class FinalPage extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div >
        <ReactToPrint
          trigger={() => <button id="printBtn">SAVE MENU</button>}
          content={() => this.componentRef}
        />
        <div ref={el => (this.componentRef = el)}>
          <div className="divToPrint">
            <table id="finalMenu">
              <thead>
                <th className="finalMenuTh">FOOD</th>
                <th className="finalMenuTh">Price (DT)</th>
              </thead>
              <tbody>
                {this.props.foodData.map((item, index) => (
                  <tr key={index}>
                    <td className="finalMenuTd">{item.food}</td>
                    <td className="finalMenuTd">{item.price}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )


  }
}

export default FinalPage;
