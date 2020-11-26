import React from "react";

class ExpenseRow extends React.Component {
  DeleteExpense = () => {
    let array = [...this.props]
    console.log(array)
    }


  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.desc}</td>
        <td>{this.props.amount}</td>
        <td>{this.props.place}</td>
        <td
          type="btn"
          onClick={this.DeleteExpense}
          key={1}
          className="btn-danger"
        >
          X
        </td>
      </tr>
    );
  }
}

export default ExpenseRow;
