//import logo from './logo.svg';
//import {Routes, Route} from 'react-router-dom';
// import Navbar from "../../components/navbar";
// import AppRoute from '../../Routes';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const baseUrl = 'http://localhost:3001/tasks';

function CreateTask() {
   //   const [users, addUser] = useState([]);
  const[task, setTask] = useState({
   task: "",
   description: "",
   status: "",
   userId: "",
  });

  function updateState (e){
   e.preventDefault();
   axios.post(baseUrl, {
      task: task.task,
      description: task.description,
      status: 1,
      userId: 1,
     })
  }

  return (
    <div className='all-users'>
    <div className='row'>
    <div className='col-2'></div>
    <div className='col-6'>
    <h1>Create Task</h1>
     <Form method='post' onSubmit={updateState}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task name</Form.Label>
            <Form.Control type="text" placeholder="Enter Task name" 
            onChange={(e)=>{
               task.task = e.target.value}
            }/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter task description" name="lname" 
            onChange={(e)=>{ task.description = e.target.value}}/>
        </Form.Group>

         <Form.Group controlId="formBasicSelect">
         <Form.Label>Select members</Form.Label>
         <Form.Control
           as="select"
           value=""
           onChange={e => {
             setTask(e.target.value);
           }}
         >
           <option value="DICTUM">User 1</option>
           <option value="CONSTANCY">User 2</option>
           <option value="COMPLEMENT">User 3</option>
         </Form.Control>
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Check type="checkbox" label="Is Active" />
       </Form.Group>

        <Button variant="primary" type="submit" >
           Create
        </Button>
     </Form>
     </div>

     <div className='col-4'></div>


     </div>
    </div>
  );
} 

export default CreateTask;
