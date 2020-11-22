import React from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expense: [
        {date: '11/18/2020', desc: 'Computer', amount: '$999', place: 'Apple'},
        {date: '11/18/2020', desc: 'Bookbag', amount: '$90', place: 'Nike'},
        {date: '11/18/2020', desc: 'Speaker', amount: '$500', place: 'BestBuy'},
        {date: '11/18/2020', desc: 'Coffee', amount: '$5', place: 'Starbucks'}
    ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      // ...this.state,
      [e.target.name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Hello World')
    // const dataExpense = {
    //   expense: [{
    //     date: '',
    //     desc: '',
    //     amount: '',
    //     place: ''
    //   }]
    //   }
    // this.setState.dataExpense.expense = dataExpense.expense.push(this.state.expenses)

   //create an object and add it to this.state.expenses
  // const {name, value} = e.target 
  //  this.setState({ [name]: value
  //   }) 
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
        handleSubmit={this.handleSubmit} />
        <Table 
        expenses={this.state.expense}/>
      </div>
    );
  }
}

export default App;
