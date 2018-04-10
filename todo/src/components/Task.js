import React from 'react';
import {Link} from 'react-router-dom';

class Task extends React.Component {

  statusChange = (event) => {
    const updatedTask = {
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.checked
    };

    this.props.updateStatus(this.props.index, updatedTask);
    console.log(updatedTask);
  }

  setCurrent = (event) => {
    const activeTask = {...this.props.details, index: this.props.index};
    this.props.setCurrentTask(this.props.index, activeTask);
    console.log(activeTask);
  }

  render() {

    const {details} = this.props; //This is the destructured version of
    //const details = this.props.details;

    return(
      <li className="task-card">
        <h2 className="task-card__heading">{details.heading}</h2>
        <section className="task-card__text">{details.text}</section>
        <div className="task-card__status">
          <input className="input-check" onChange={this.statusChange} checked={details.complete} type="checkbox" id={`status${this.props.index}`} name="complete" />
          <label className="input-check__label" htmlFor={`status${this.props.index}`}></label>
          </div>
        <span className="x-btn" onClick={() => this.props.deleteTask(this.props.index)}>&times;</span>
        <Link to="/edit" className="edit-btn" onClick={this.setCurrent}>Edit</Link>
      </li>
    )	
  }
}

export default Task;