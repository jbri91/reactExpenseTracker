import React from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./UserInput";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <Header />
        <UserInput />
        <Table />
      
    </div>
  );
}

export default App;
