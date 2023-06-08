import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import DashboardLayout from "../DashboardLayout";

const baseURL = "http://localhost:3001/todos";

function Todos() {
   const [todos, getTodos] = useState(null);
   useEffect(() => {
      axios.get(baseURL).then((response) => {
        getTodos(response.data);
      });
    }, []);
    
    if (!todos) return null;
    
      return (
        <div>
          <Table striped bordered hover size="sm" className="border table-bordered table-hover table-responsive shadow p-3 mb-5  rounded">
           <thead>
              <tr>
                <th>#</th>
                <th>Todo Name</th>
                <th>Complete</th>
                <th>Date</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>
                {todos.map(todo => <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.todo}</td>
                  <td><input type="checkbox" className="m-2"/><span>Done</span></td>
                  <td>{Date.parse(todo.createdAt)}</td>
                  <td>
                  <button className="btn">Delete</button>                  
                  </td>
                  </tr>)
               }
            </tbody>
          </Table>
        </div>               
      );
 }



export default Todos;
