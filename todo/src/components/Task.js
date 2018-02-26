import React from 'react';

class Task extends React.Component {
  render() {
    return(
      <li className="task-card">
        <h2>Task name</h2>
        <section>Task details</section>
        <div>completed: ?</div>
      </li>
    )	
  }
}

export default Task;