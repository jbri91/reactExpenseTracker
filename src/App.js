import React from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      desc: "",
      amount: "",
      place: "",
      expense: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newExpense = [...this.state.expense];

    const expenses = {
      id: Math.floor(new Date().getTime()*Math.random()),
      date: this.state.date,
      desc: this.state.desc,
      amount: this.state.amount,
      place: this.state.place,
    };

    newExpense.push(expenses);

    localStorage.setItem("Expense", JSON.stringify(newExpense));
    this.setState({ expense: newExpense });
  }

  deleteRow(expenseId) {
    const newExpense = [...this.state.expense];
    console.log(this.state.expenses.Id)
    // let index = newExpense.indexOf(e.target.parentElement.value)
    // console.log(e.target.parentElement.value)
    // if(index !== -1) {
    //   newExpense.splice(index, 1);
    //   this.setState({expense: newExpense})
    // }
    //   e.target.parentElement.remove();

      // this.setState({ newExpense });
    
  }

  componentDidMount() {
    const savedExpenses = JSON.parse(localStorage.getItem("Expense")) || [];
    const expense = [...this.state.expense, ...savedExpenses];
    this.setState({ expense });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserInput
          date={this.state.expense.date}
          desc={this.state.expense.desc}
          amount={this.state.expense.amount}
          place={this.state.expense.place}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Table expenses={this.state.expense} deleteRow={this.deleteRow} />
      </div>
    );
  }
}

export default App;
