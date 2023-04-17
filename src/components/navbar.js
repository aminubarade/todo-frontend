import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
  render(){
    return (
       <nav>
          <Link to='/' className="App-link">New User</Link> 
          <Link to="/users" className="App-link">All Users</Link> 
       </nav>
       
    )
   };
  

}

export default Navbar;
