import React from 'react';

class AddTaskForm extends React.Component {

  //headingRef = React.createRef();
  //detailRef = React.createRef();

  createTask = (event) => {
    event.preventDefault();
    //console.log(this.headingRef.value.value);

    const task = {
      heading: this.heading.value,
      text: this.detail.value
    };

    this.props.addTask(task);
  }

  render() {

    return(
      <form action="" className="task-card" onSubmit={this.createTask}>
        <h3 className="task-card__heading">Add new</h3>
        <input name="task-heading" ref={(input) => (this.heading = input)} placeholder="Task heading" id="task-heading" />
        <textarea name="task-detail" ref={(input) => (this.detail = input)} placeholder="Task details" id="task-detail"></textarea>
        <button name="submit-button">Add</button>
      </form>
    )	
  }
}

export default AddTaskForm;