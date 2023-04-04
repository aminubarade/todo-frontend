import React, { Component } from "react";
import axios from "axios";


 class Task extends Component {
    constructor(props){
      super(props) 
      this.state = {
         tasks: []
      }
    }

    componentDidMount(){
      axios.get('http://localhost:3001/tasks')
      .then(res => {
         this.setState({
            tasks: res.data
         })
      })
    }

    render(){
      const {tasks} = this.state;
      return (
         <div>
            {tasks.map(task => <div key={task.id}>{task.task}</div>)}
         </div>
         
      )

      //get all task

      //view task

      //create task

      //edit task

      //delete task
  };
 }



export default Task;
