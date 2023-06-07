import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";


const baseURL = 'http://localhost:3001/users/';


function ViewUser() {
  const params = useParams();
  const userId = params.userId;
   const [user, getUser] = useState(null);

   useEffect(() => {
      axios.get(baseURL+userId).then((response) => {
        getUser(response.data);
      });
    },);
    
    if (!user) return null;


      return (
         <div className="all-users p-4">
         <h1>{user[0].username} Profile</h1>
           <Table striped bordered hover size="sm">
           <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
               </tr>
            </thead>
            <tbody>
              <tr>
                 <td>1</td>
                 <td>{user[0].username}</td>
                 <td>{user[0].firstname}</td>
                 <td>{user[0].lastname}</td>
                 <td>{user[0].email}</td>
              </tr>
            </tbody>
           </Table> 
           <h6><a href="/tasks">{user[0].username} Tasks</a></h6>         
         </div>
      )
 }
export default ViewUser;
