//import logo from './logo.svg';
//import './App.css';
import {Routes, Route} from 'react-router-dom';
//import Todo from './components/TodoComponent'
//import Task from './components/TaskComponent'
//import User from './components/UserComponent/UserComponent';
import CreateUser from './components/UserComponent/createUser';
import AllUsers from './components/UserComponent/AllUsers';
import ViewUser from './components/UserComponent/viewUser';


function AppRoute() {
  return (
    <div className="App">
         <Routes>
            <Route path='/' element></Route>
            <Route path='/create_user' element={<CreateUser />} />
            <Route path='/all_users' element={<AllUsers />} />
            <Route path='/view_user' element={<ViewUser />} />  
         </Routes>
    </div>
  );
}

export default AppRoute;
