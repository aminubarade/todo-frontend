import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Todos from "../TodoComponent/Todo";
import DashboardLayout from "../DashboardLayout";


const baseURL = 'http://localhost:3001/tasks/';


function ViewTask() {
  const params = useParams();
  const taskId = params.taskId;
   const [task, getTask] = useState(null);

   useEffect(() => {
      axios.get(baseURL+taskId).then((response) => {
        getTask(response.data);
      });
    }, );
    
    if (!task) return null;

      return (
        <DashboardLayout>
         <h1>Task: {task[0].task}</h1>
         <h6>Description: {task[0].description}</h6>
         <br></br>
         <h5>Progress: 0%</h5>
           <Todos></Todos>        
        </DashboardLayout>
      )
 }
export default ViewTask;
