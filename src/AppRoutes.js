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


function AppRoute() {
  return (
    <div className="">
         <Routes>
            <Route path='/' element></Route>
            <Route path='/create_user' element={<CreateUser />} />
            <Route path='/users' element={<AllUsers />} />
            <Route path={`users/view_user/:userId`} element={<ViewUser />} />  

            <Route path={`/tasks`} element={<Task />} /> 
            <Route path={`tasks/view_task/:taskId`} element={<ViewTask />} />  

         </Routes>
    </div>
  );
}

export default AppRoute;
