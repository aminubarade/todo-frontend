import React, { Component } from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';


const baseURL = "http://localhost:3001/users";

function AllUsers() {
   const [users, getUsers] = useState(null);
   useEffect(() => {
      axios.get(baseURL).then((response) => {
        getUsers(response.data);
      });
    }, []);
    
    if (!users) return null;
      return (
         <div>
           <Table striped bordered hover size="sm">
           <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><a href={"/user/"+user.id}>{user.firstname}</a></td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>
                  <a href={"/user/"+user.id}>Edit {" "}</a>
                  <a href={"/user/"+user.id}>Delete</a>
                  
                  </td>
                  </tr>)
               }
            </tbody>
           </Table>              
         </div>
         
      );
 }



export default AllUsers;
