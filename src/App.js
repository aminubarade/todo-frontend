import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
//import Todo from './components/TodoComponent'
//import Task from './components/TaskComponent'
//import User from './components/UserComponent/UserComponent';
import Navbar from "./components/navbar";
import AppRoute from './Routes';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Navbar />
         <AppRoute>
          
         </AppRoute>
      
      </header>
    </div>
  );
}

export default App;
