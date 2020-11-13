import ReactDOM from 'react-dom'
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import UserInput from './UserInput';

function App() {
  return (
    <div className="App">
      <header >
        <p>
          <Header />
          <UserInput />
          <Table />
        </p>
        </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
