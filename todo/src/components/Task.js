import React from 'react';

class Task extends React.Component {
  render() {

    const {details} = this.props; //This is the destructured version of
    //const details = this.props.details;

    return(
      <li className="task-card">
        <h2>{details.heading}</h2>
        <section>{details.text}</section>
        <div>completed: {details.complete ? "true" : "false"}</div>
      </li>
    )	
  }
}

export default Task;