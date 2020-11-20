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
   //create an object and add it to this.state.expenses

    this.setState({
      date: "",
      desc: "",
      amount: "",
      place: "",
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <UserInput 
        date={this.state.date}
        desc={this.state.desc}
        amount={this.state.amount}
        place={this.state.place}
        onChange={this.handleChange}
        onClick={this.handleSubmit} />
        <Table 
        expenses={this.state.expense}/>
      </div>
    );
  }
}

export default App;
