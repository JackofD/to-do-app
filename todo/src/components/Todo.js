import React from 'react';
import Sample from '../sample';
import Task from './Task';

class Todo extends React.Component {

  constructor(){
    super();
    
    this.state = {
      tasks: {}
    }
  }

  loadSamples(){
    this.setState({
      tasks: Sample
    })
  }

  render() {
    return(
      <ul className="task-list">
        <Task />
      </ul>
    )	
  }
}

export default Todo;