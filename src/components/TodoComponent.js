import React, { Component } from "react";
import axios from "axios";

class Todo extends Component {
  constructor(props){
    super(props) 
    this.state = {
       todos: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/todos')
    .then(res => {
       this.setState({
          todos: res.data
       })
    })
  }

  render(){
    const {todos} = this.state;
    return (
       <div>
          {todos.map(todo => <div key={todo.id}>{todo.todo}</div>)}
       </div>
       
    )

    //get all task

    //view task

    //create task

    //edit task

    //delete task
   };
}


// function Body (){
//   return <h1>Aminu Developer</h1>
// }


export default Todo;
