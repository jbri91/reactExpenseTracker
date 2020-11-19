import React from "react";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      desc: "",
      amount: "",
      place: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  const value = e.target.value;
  this.setState({ 
    // ...this.state,
    [e.target.name]: value
  })
  }

  handleSubmit(e) {
    e.preventDefault();
    // const value = e.target.value
    // console.log(this.setState({[e.target.name]: value}))
    console.log(this.state)
    this.setState({
       date:"",
       desc: "",
       amount: "",
       place: ""
    })
}

  render() {
    return (
      <form>
        <input
          name="date"
          className="col-sm-6 col-md-3"
          type="date"
          placeholder="Date of Expense"
          id="date"
          value={this.state.date}
          onChange={this.handleChange}
        ></input>
        <input
          name="desc"
          className="col-sm-6 col-md-3"
          placeholder="Description of Expense"
          id="desc"
          value={this.state.desc}
          onChange={this.handleChange}
        ></input>
        <input
          name="amount"
          className="col-sm-6 col-md-3"
          type="number"
          placeholder="Amount"
          id="amount"
          value={this.state.amount}
          onChange={this.handleChange}
        ></input>
        <input 
        name="place"
        className="col-sm-6 col-md-3" 
        placeholder="Where?"
        id="place"
        value={this.state.place}
        onChange={this.handleChange}></input>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserInput;
