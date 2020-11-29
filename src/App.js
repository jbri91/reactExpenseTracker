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
    // let stateExpense = this.state.expense
    let date = document.getElementById('date');
    let desc = document.getElementById('desc');
    let amount = document.getElementById('amount');
    let place = document.getElementById('place');
    const newExpense = [...this.state.expense];
    const expenses = {
      id: Math.floor(new Date().getTime() * Math.random()),
      date: this.state.date,
      desc: this.state.desc,
      amount: this.state.amount,
      place: this.state.place,
    };


    if (!date.value || !desc.value || !amount.value || !place.value) {
      alert('Please Fill Out ')
    } else {
    newExpense.push(expenses);
    date.value=""
    desc.value=""
    amount.value=""
    place.value=""
    localStorage.setItem("Expense", JSON.stringify(newExpense));
    this.setState({ expense: newExpense });

    
  }
}

  deleteRow(expenseId) {
    let index = this.state.expense.findIndex(item => item.id === expenseId)
    this.state.expense.splice(index, 1)
    const newExpense = [...this.state.expense];
    localStorage.setItem('Expense', JSON.stringify(newExpense))
    this.setState({ newExpense }) 
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
