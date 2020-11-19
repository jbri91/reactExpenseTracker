import React from "react";
import UserInput from './UserInput'

class ExpenseRow extends React.Component {

  DeleteExpense = () => {
    console.log("Deleted!");
  }; 

  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.desc}</td>
        <td>{this.props.amount}</td>
        <td>{this.props.place}</td>
        <td type="btn" onClick={this.DeleteExpense} className="btn-danger">
          X
        </td>
      </tr>
    );
  }
}

export default ExpenseRow;
