import React from "react";
import ExpenseRow from "./ExpenseRow";

const Table = (props) => {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark thead-border">
            <tr style={{ fontSize: '20px' }}>
              <th>Date Of Expense</th>
              <th>Description of Expense</th>
              <th>Amount</th>
              <th>Where was purchase made?</th>
              <th>Delete Expense</th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "bold", fontStyle: "italic" }}>
            {props.expenses.map((expenseItem) => (
              <ExpenseRow
                key={expenseItem.id}
                date={expenseItem.date}
                desc={expenseItem.desc}
                amount={expenseItem.amount}
                place={expenseItem.place}
                deleteRow={props.deleteRow}
                expenseId={expenseItem.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  
}

export default Table;
