import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';


const baseURL = 'http://localhost:3001/users/1';


function ViewUser() {
   const [user, getUser] = useState(null);

   useEffect(() => {
      axios.get(baseURL).then((response) => {
        getUser(response.data);
      });
    }, []);
    
    if (!user) return null;

    function editUser(id){}
    function deleteUser(id){}

      return (
         <div>
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
         </div>
      )
 }
export default ViewUser;
