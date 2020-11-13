import ReactDOM from 'react-dom'
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header >
        <p>
          <Header />
        </p>
        </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
