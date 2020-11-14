import React from "react";

class Expense extends React.Component {
  constructor() {
    super();
  }

  DeleteExpense = () => {
    console.log("Deleted!");
  };

  render() {
    return (
      <tr>
        <td>10/20/2020</td>
        <td>Computer</td>
        <td>$999</td>
        <td>Apple</td>
        <td type="btn" onClick={this.DeleteExpense} className="btn-danger">
          X
        </td>
      </tr>
    );
  }
}

export default Expense;
