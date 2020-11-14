import React from 'react'
<<<<<<< HEAD
=======
import ReactDOM from 'react-dom'
>>>>>>> ba4f08feaca23e2f7aceb811e8da0ff6e524b482
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import UserInput from './UserInput';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header >
          <Header />
          <UserInput />
          <Table />
      </header>
    </div>
  );
}

export default App;
