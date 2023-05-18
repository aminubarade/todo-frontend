//import logo from './logo.svg';
//import {Routes, Route} from 'react-router-dom';
// import Navbar from "../../components/navbar";
// import AppRoute from '../../Routes';
import {useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const baseUrl = 'http://localhost:3001/users';

function CreateUser() {
   //   const [users, addUser] = useState([]);
  const[user, setUser] = useState({
   firstname: "",
   lastname: "",
   username: "",
   email: "",
   password: ""
  });

  function updateState (e){
   e.preventDefault();
   axios.post(baseUrl, {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      password: user.password
     })
  }

  return (
    <div>
     <Form method='post' onSubmit={updateState}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" placeholder="Enter firstname" 
            onChange={(e)=>{
               user.firstname = e.target.value}
            }/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" placeholder="Enter Lastname" name="lname" 
            onChange={(e)=>{ user.lastname = e.target.value}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name="uname"
            onChange={(e)=>{ user.username = e.target.value}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" 
            onChange={(e)=>{ user.email = e.target.value}}/>
            <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" 
            onChange={(e)=>{ user.password = e.target.value}}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cofirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
        <Button variant="primary" type="submit" >
           Submit
        </Button>
     </Form>

    </div>
  );
}

export default CreateUser;
