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
      date: this.state.date,
      desc: this.state.desc,
      amount: this.state.amount,
      place: this.state.place,
    };

    newExpense.push(expenses);

    localStorage.setItem('Expense', JSON.stringify(newExpense))
    this.setState({ expense: newExpense });
    
  }

  deleteRow(e) {
  if(e.target.id === 'deleteButton') {
    e.target.parentElement.remove()
    const newExpense = [...this.state.expense]
    this.setState({ expense: newExpense })
  }

  // localStorage.removeItem('Johnny')

  
}

componentDidMount() {   
const savedExpenses = JSON.parse(localStorage.getItem('Expense')) || [];
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
        <Table 
        expenses={this.state.expense}
        deleteRow={this.deleteRow} />
      </div>
    );
  }
}

export default App;
