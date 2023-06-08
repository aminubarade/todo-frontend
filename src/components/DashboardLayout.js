//import logo from './logo.svg';
import '../App.css';
//import {Routes, Route} from 'react-router-dom';
//import Todo from './components/TodoComponent'
//import Task from './components/TaskComponent'
//import User from './components/UserComponent/UserComponent';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';

function DashboardLayout({children}) {
  return (
     <div className='container-fluid p-0'>
        <div className='sidenav'>
          <Sidebar></Sidebar>
        </div>

        <div className='main'>  
          <div className="nav">
            <Navbar />
          </div>
          <div className="p-5">
            {children}
          </div>
        </div>
        </div>
  );
}

export default DashboardLayout;
