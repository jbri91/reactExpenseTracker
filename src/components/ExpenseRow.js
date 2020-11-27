import React from "react";
class ExpenseRow extends React.Component {
  DeleteExpense = () => {
   console.log('hello"')
    }


  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.desc}</td>
        <td>${this.props.amount}</td>
        <td>{this.props.place}</td>
        <td
          type="btn"
          onClick={this.props.deleteRow}
          className="btn-danger"
          id='deleteButton'
        >
          X
        </td>
      </tr>
    );
  }
}

export default ExpenseRow;
