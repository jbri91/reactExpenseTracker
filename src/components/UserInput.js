import React from "react";

class UserInput extends React.Component {
  render() {
    return (
      <form>
        <input
          name="date"
          className="col-sm-6 col-md-3"
          type="date"
          placeholder="Date of Expense"
          id="date"
          value={this.props.date}
          onChange={this.props.handleChange}
        ></input>
        <input
          name="desc"
          className="col-sm-6 col-md-3"
          placeholder="Description of Expense"
          id="desc"
          value={this.props.desc}
          onChange={this.props.handleChange}
        ></input>
        <input
          name="amount"
          className="col-sm-6 col-md-3"
          type="number"
          placeholder="Amount"
          id="amount"
          value={this.props.amount}
          onChange={this.props.handleChange}
        ></input>
        <input
          name="place"
          className="col-sm-6 col-md-3"
          placeholder="Where?"
          id="place"
          value={this.props.place}
          onChange={this.props.handleChange}
        ></input>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={this.props.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserInput;
