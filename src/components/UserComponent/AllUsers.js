import React, { Component } from "react";
import axios from "axios";


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
            {users.map(user => <div key={user.id}>{user.username}</div>)}
         </div>
         
      )

  };
 }



export default AllUsers;
