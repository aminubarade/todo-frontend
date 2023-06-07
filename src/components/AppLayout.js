//import logo from './logo.svg';
import './App.css';
//import {Routes, Route} from 'react-router-dom';
//import Todo from './components/TodoComponent'
//import Task from './components/TaskComponent'
//import User from './components/UserComponent/UserComponent';
import Navbar from "./components/navbar";
import AppRoute from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
     <div className='row'>
        <div className='col-2 bg-dark p-0'>
          <Sidebar></Sidebar>
        </div>

        <div className='col-10 p-0'>  
          <div className="nav">
            <Navbar />
          </div>
            <AppRoute>
          
            </AppRoute>
          </div>
        </div>
      </div>
  );
}

export default App;
