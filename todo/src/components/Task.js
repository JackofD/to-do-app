import React from 'react';

class Task extends React.Component {
  render() {

    const {details} = this.props; //This is the destructured version of
    //const details = this.props.details;

    return(
      <li className="task-card">
        <h2 className="task-card__heading">{details.heading}</h2>
        <section className="task-card__text">{details.text}</section>
        <div className="task-card__status">completed: {details.complete ? "true" : "false"}</div>
        <span onClick={() => this.props.deleteTask(this.props.index)}>&times;</span>
      </li>
    )	
  }
}

export default Task;