//import logo from './logo.svg';
//import {Routes, Route} from 'react-router-dom';
// import Navbar from "../../components/navbar";
// import AppRoute from '../../Routes';
import {useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CreateUser() {
   //   const [users, addUser] = useState([]);
  const[user, setUser] = useState({
   firstname: "",
   lastname: "",
   username: "",
   email: "",
   password: ""
  });


  function updateState (fname, lname, uname, email, pword){
   setUser(currentUser => 
      {
         currentUser.firstname = fname;
         currentUser.lastname = lname;
         currentUser.username = uname;
         currentUser.email = email;
         currentUser.password = pword;
         return { ...currentUser}
      })
  }

  useEffect(() =>{
     console.log("user created")
  }, user);

  
  return (
    <div>
     <Form method='post'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" placeholder="Enter firstname" name="fname"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" placeholder="Enter Lastname" name="lname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter username" name="uname"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
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
