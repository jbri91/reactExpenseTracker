import React from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "./abstractBlackAndWhiteBackground.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      desc: "",
      amount: "",
      place: "",
      expenses: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const date = document.getElementById("date");
    const desc = document.getElementById("desc");
    const amount = document.getElementById("amount");
    const place = document.getElementById("place");

    const expenseItem = {
      id: Math.random(),
      date: this.state.date,
      desc: this.state.desc,
      amount: this.state.amount,
      place: this.state.place,
    };

    if (!date.value || !desc.value || !amount.value || !place.value) {
      alert("Please Fill Out All Input Fields ");
    } else {
      this.setState({
        expenses: [...this.state.expenses, expenseItem],
      });
    }
  }

  deleteRow(expenseId) {
    const tableMinuesOneRow = this.state.expenses.filter((targetRow) => {
      return targetRow.id !== expenseId;
    });
    this.setState({ expenses: tableMinuesOneRow });
  }

  componentDidMount() {
    const savedExpenses = JSON.parse(localStorage.getItem("Expense"));
    savedExpenses
      ? this.setState({ expenses: savedExpenses })
      : this.setState({ expenses: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenses !== prevState.expenses.length) {
      localStorage.setItem("Expense", JSON.stringify(this.state.expenses));
    }
  }

  render() {
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header />
        <UserInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Table expenses={this.state.expenses} deleteRow={this.deleteRow} />
      </div>
    );
  }
}

export default App;
