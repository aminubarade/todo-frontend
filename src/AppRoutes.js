//import logo from './logo.svg';
//import './App.css';
import {Routes, Route} from 'react-router-dom';
//import Todo from './components/TodoComponent'
//import Task from './components/TaskComponent'
//import User from './components/UserComponent/UserComponent';
import CreateUser from './components/UserComponent/createUser';
import AllUsers from './components/UserComponent/AllUsers';
import ViewUser from './components/UserComponent/viewUser';
import Task from './components/TaskComponent/Task';
import ViewTask from './components/TaskComponent/viewTask';
import CreateTask from './components/TaskComponent/createTask';
import Login from './components/AuthComponent/LoginComponent';
import AuthLayout from './components/AuthComponent/AuthLayout';
import RegisterComponent from './components/AuthComponent/RegisterComponent';


function AppRoute() {
  return (
    <div className="">
         <Routes>
            
            <Route path='/' element={<Login />} ></Route>

            <Route path={'users'}  >
              <Route index element={<AllUsers />} />
              <Route path={'create'} element={<CreateUser />} />
              <Route path={`view_user/:userId`} element={<ViewUser />} />  
            </Route> 

            <Route path={`tasks`} > 
               <Route index element={<Task />} />
               <Route path='create' element={<CreateTask />} />
               <Route path={`view_task/:taskId`} element={<ViewTask />} />  
            </Route> 

            <Route path={`auth`} element={<AuthLayout />} >
              <Route index element={<Login />} />
              <Route path={`login`} element={<Login />} />
              <Route path={`register`} element={<RegisterComponent />} />
            </Route>   
         </Routes>
    </div>
  );
}

export default AppRoute;
