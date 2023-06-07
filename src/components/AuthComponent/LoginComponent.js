import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import AuthLayout from './AuthLayout';
//import AuthLayout from './AuthLayout';


const baseUrl = 'http://localhost:3001/auth/login/';

function LoginUser() {
   //   const [users, addUser] = useState([]);
  const[user, setUser] = useState({
   password: ""
  });

  function updateState (e){
   e.preventDefault();
   axios.post(baseUrl+user.username, {
      password: user.password
     })
  }
  
  return (
   <AuthLayout>
    <h1>Login</h1>
     <Form method='post' onSubmit={updateState}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name="uname"
            onChange={(e)=>{ user.username = e.target.value}}/>
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" 
            onChange={(e)=>{ user.password = e.target.value}}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
        <Button variant="primary" type="submit" >
           Login
        </Button>
     </Form>
    </AuthLayout>
  );
}

export default LoginUser;
