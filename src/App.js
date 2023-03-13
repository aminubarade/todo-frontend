import logo from './logo.svg';
import './App.css';
//import Todo from './components/TodoComponent'
//import Task from './components/TaskComponent'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>This is the link portfolio page</code> .
        </p>
        <a
          className="App-link"
          href="http://aminubarade.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Aminu Barade
        </a>
      </header>
    </div>
  );
}

export default App;
