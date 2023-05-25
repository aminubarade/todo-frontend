import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";


const baseURL = "http://localhost:3001/users";

function AllUsers() {
   const [users, getUsers] = useState(null);
   useEffect(() => {
      axios.get(baseURL).then((response) => {
        getUsers(response.data);
      });
    }, []);
    
    if (!users) return null;
    
    // function editUser(){
    //   axios
    //   .put(`${baseURL}/1`, {
    //     username: "Hello World!",
    //     firstname: "This is an updated user."
    //   })
    //   .then((response) => {
    //     getUsers(response.data);
    //   });
    // }

    // function deleteUser(){
    //   axios
    //   .delete(`${baseURL}/1`)
    //   .then(() => {
    //     alert("User deleted!");
    //     getUsers(null)
    //   });
    // }
    
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
                  <td><Link to={"/users/view_user/"+user.id}>{user.firstname}</Link> </td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
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



export default AllUsers;
