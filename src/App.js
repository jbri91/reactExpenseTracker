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
      date: "",
      desc: "",
      amount: "",
      place: "",
      expense: [
        {date: '11/18/2020'},
        {desc: 'Computer'},
        {amount: '123'},
        {place: 'Apple'}
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
    // const value = e.target.value
    // console.log(this.setState({[e.target.name]: value}))

    this.setState({
      date: "",
      desc: "",
      amount: "",
      place: "",
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserInput 
        date={this.state.expense[0]}
        desc={this.state.expense[0]}
        amount={this.state.expense[0]}
        place={this.state.expense[0]} />
        <Table />
      </div>
    );
  }
}

export default App;
