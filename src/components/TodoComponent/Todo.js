import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';


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
         <div className="">
           <Table striped bordered hover size="sm">
           <thead>
              <tr>
                <th>#</th>
                <th>Todo Name</th>
                <th>Status</th>
                <th>Mark</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>
                {todos.map(todo => <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.todo}</td>
                  <td>{todo.status}</td>
                  <td></td>
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



export default Todos;
