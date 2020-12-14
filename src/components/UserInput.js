import React from "react";

const UserInput = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      style={{ paddingTop: "5%", paddingBottom: "3%" }}
    >
      <input
        name="date"
        className="col-sm-6 col-md-3"
        type="date"
        placeholder="Date of Expense"
        id="date"
        value={props.date}
        onChange={props.handleChange}
      ></input>
      <input
        name="desc"
        className="col-sm-6 col-md-3"
        placeholder="Description of Expense"
        id="desc"
        value={props.desc}
        onChange={props.handleChange}
      ></input>
      <input
        name="amount"
        className="col-sm-6 col-md-3"
        type="number"
        placeholder="Amount"
        id="amount"
        value={props.amount}
        onChange={props.handleChange}
      ></input>
      <input
        name="place"
        className="col-sm-6 col-md-3"
        placeholder="Where?"
        id="place"
        value={props.place}
        onChange={props.handleChange}
      ></input>
      <button
        type="submit"
        className="btn btn-secondary"
        style={{
          marginTop: "55px",
          marginBottom: "25px",
          fontSize: "20px",
          width: "10%",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default UserInput;
