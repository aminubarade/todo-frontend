import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";


const baseURL = "http://localhost:3001/tasks";

function Tasks() {
   const [tasks, getTasks] = useState(null);
   useEffect(() => {
      axios.get(baseURL).then((response) => {
        getTasks(response.data);
      });
    }, []);
    
    if (!tasks) return null;
    
      return (
         <div className="all-users p-5">
         <h1>Tasks</h1>
         <span>Filter | </span> <span> <Link to='/create_task' className="navbar-brand">New Task</Link> </span>
           <Table striped bordered hover size="sm">
           <thead>
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>Task Name</th>
                <th>Progress</th>
                <th>Members</th>
                <th>Status</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>
                {tasks.map(task => <tr key={task.id}>
                  <td>{task.id}</td>
                  <td><Link to={"/tasks/view_task/"+task.id}>{task.task}</Link> </td>
                  <td>In Progress: 90%</td>
                  <td>User 1, User 2, User 3</td>
                  <td>Active</td>
                  <td>
                  <button onClick>Edit</button>
                  <button onClick>Delete</button>
                  </td>
                  </tr>)
               }
            </tbody>
           </Table>              
         </div>
      );
 }



export default Tasks;
