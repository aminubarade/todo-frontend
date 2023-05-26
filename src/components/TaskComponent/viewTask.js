import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";
import Todos from "../TodoComponent/Todo";


const baseURL = 'http://localhost:3001/tasks/';


function ViewTask() {
  const params = useParams();
  const taskId = params.taskId;
   const [task, getTask] = useState(null);

   useEffect(() => {
      axios.get(baseURL+taskId).then((response) => {
        getTask(response.data);
      });
    }, []);
    
    if (!task) return null;

      return (
         <div>
         <h1>Task: {task[0].task}</h1>
         <h6>Description: {task[0].description}</h6>
         <br></br>
         <h6>Todos:</h6>
           <Todos></Todos>        
         </div>
      )
 }
export default ViewTask;