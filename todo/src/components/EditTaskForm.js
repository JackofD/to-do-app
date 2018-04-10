import React from 'react';

class EditTaskForm extends React.Component {

  updateOriginalTask = (event) => {
    event.preventDefault();

    const task = {
      heading: this.heading.value,
      text: this.detail.value,
    };

    this.props.addTask(task);
  }

  updateValue = (event) => {
    const updatedTask = {
      ...this.props.currentDetails,
      [event.currentTarget.name]: event.currentTarget.value}

    console.log(updatedTask);
  }

  render() {
    const details = this.props.currentDetails;

    return(
      <form ref={(input) => (this.taskForm = input)} action="" className="task-card" >
        <h3 className="task-card__heading">Edit the task</h3>
        <input name="task-heading" required ref={(input) => (this.heading = input)} onChange={this.updateValue} value={details.heading} placeholder="Task heading" id="task-heading" />
        <textarea name="task-detail" ref={(input) => (this.detail = input)} onChange={this.updateValue} value={details.text} placeholder="Task details" id="task-detail">
        </textarea>
        <button name="submit-button">Save</button>
      </form>
    )	
  }
}

export default EditTaskForm;