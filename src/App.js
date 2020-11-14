import ReactDOM from 'react-dom'
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

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
