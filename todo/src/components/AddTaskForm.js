import React from 'react';

class AddTaskForm extends React.Component {

  //react 16.3 and onward examples
  //headingRef = React.createRef();
  //detailRef = React.createRef();

  createTask = (event) => {
    event.preventDefault();

    const task = {
      heading: this.heading.value,
      text: this.detail.value,
      complete: false
    };

    this.props.addTask(task);
    this.taskForm.reset();
  }

  render() {

    return(
      <form ref={(input) => (this.taskForm = input)} action="" className="task-card" onSubmit={this.createTask}>
        <h3 className="task-card__heading">Add new</h3>
        <input name="task-heading" required ref={(input) => (this.heading = input)} placeholder="Task heading" id="task-heading" />
        <textarea name="task-detail" ref={(input) => (this.detail = input)} placeholder="Task details" id="task-detail"></textarea>
        <button name="submit-button">Add</button>
      </form>
    )	
  }
}

export default AddTaskForm;