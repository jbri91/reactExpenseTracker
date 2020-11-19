import React from "react";
import ExpenseRow from "./ExpenseRow";

class Table extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark thead-border">
            <tr>
              <th>Date Of Expense</th>
              <th>Description of Expense</th>
              <th>Amount</th>
              <th>Where was purchase made?</th>
              <th>Delete Expense</th>
            </tr>
          </thead>
          <tbody>
            <ExpenseRow
            date={this.props.date}
            desc={this.props.date}
            amount={this.props.date}
            place={this.props.date} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
