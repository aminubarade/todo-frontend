import React from "react";
import {useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";



const baseURL = "http://localhost:3001/users";

function AllUsers() {
  var counter = 0;
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
         <div className="all-users p-5">
         <h1>Users</h1>
         <span>Filter | </span> <span> <Link to='/create_user' className="navbar-brand">New User</Link> </span>
           <Table striped  hover size="sm" className="table-responsive">
           <thead className="p-4">
              <tr className="bg-dark text-white">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                  <td>{++counter}</td>
                  <td><Link to={"/users/view_user/"+user.id}>{user.firstname}</Link> </td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td className="">
                  <button className="m-0">Edit</button>
                  <button className="m-0">Delete</button>
                  </td>
                  </tr>)
               }
            </tbody>
           </Table>              
         </div>
         
      );
 }



export default AllUsers;
