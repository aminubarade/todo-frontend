import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';



 class AllUsers extends Component {
    constructor(props){
      super(props) 
      this.state = {
         users: []
      }
    }

    componentDidMount(){
      axios.get('http://localhost:3001/users')
      .then(res => {
         this.setState({
            users: res.data
         })
      })
    }

    render(){
      const {users} = this.state;
      return (
         <div>
           <Table striped bordered hover size="sm">
           <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
               </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><a href={"/user/"+user.id}>{user.firstname}</a></td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  </tr>)
               }
            </tbody>
           </Table>              
         </div>
         
      )

  };
 }



export default AllUsers;
