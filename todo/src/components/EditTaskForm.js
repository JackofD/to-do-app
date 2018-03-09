import React from 'react';

class EditTaskForm extends React.Component {

  createTask = (event) => {
    event.preventDefault();

    const task = {
      heading: this.heading.value,
      text: this.detail.value
    };

    this.props.addTask(task);
    this.taskForm.reset();
  }

  render() {

    return(
      <form ref={(input) => (this.taskForm = input)} action="" className="task-card" onSubmit={this.createTask}>
        <h3 className="task-card__heading">Edit the task</h3>
        <input name="task-heading" required ref={(input) => (this.heading = input)} placeholder="Task heading" id="task-heading" />
        <textarea name="task-detail" ref={(input) => (this.detail = input)} placeholder="Task details" id="task-detail"></textarea>
        <button name="submit-button">Save</button>
      </form>
    )	
  }
}

export default EditTaskForm;