import React from "react";
import ExpenseRow from "./components/ExpenseRow";

class UserInput extends React.Component {
  constructor() {
    super()
    this.state = {
      expenses: []
    }

    this.SubmitExpense = this.SubmitExpense.bind(this)

  }

  SubmitExpense(e) {
    e.preventDefault() 
    console.log({}); 
  }

  render() {
    return (
      <form>
        <input
          className="col-sm-6 col-md-3"
          type="date"
          placeholder="Date of Expense"
          id="date"
        ></input>
        <input
          className="col-sm-6 col-md-3"
          placeholder="Description of Expense"
          id="desc"
        ></input>
        <input
          className="col-sm-6 col-md-3"
          type="number"
          placeholder="Amount"
          id="amount"
        ></input>
        <input className="col-sm-6 col-md-3" placeholder="Where?"></input>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={this.SubmitExpense}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserInput;
