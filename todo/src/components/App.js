import React from 'react';
import Header from './Header';
import Sample from '../sample';
import Sidebar from './SideBar';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import base from '../base';

class App extends React.Component {
  //this constructor is used to initialise the state
  constructor(){
    super();

    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      tasks: {}
    }
  }

  addTask = (task) => {
    const tasks = { ...this.state.tasks };
    tasks[`task${Date.now()}`] = task;
    this.setState({ tasks: tasks }); // can also be this.setState({ tasks });
    console.log("adding a task that was created");
  }

  deleteTask = (key) => {
    const tasks = { ...this.state.tasks };
    tasks[key] = null;
    this.setState({ tasks });
  }

  updateStatus = (key, updatedTask) => {
    const tasks = { ...this.state.tasks };
    tasks[key] = updatedTask;
    this.setState({ tasks });
  }

  componentWillMount(){
    this.ref = base.syncState(`/`, {
      context: this,
      state: 'tasks'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  loadSamples(){
    this.setState({
      tasks: Sample
    })
  }

  render() {
    return(
      <div className="site-wrapper">
        <Header />

        <button onClick={this.loadSamples}>Sample</button>
        <section className="main-content">
          <Sidebar />
          <main className="todo-content">
            <AddTaskForm addTask={this.addTask} />
            <ul className="task-list">
              {
                Object
                  .keys(this.state.tasks)
                  .map(key => <Task key={key} index={key} details={this.state.tasks[key]} updateStatus={this.updateStatus} deleteTask={this.deleteTask} />)
              }
            </ul>
          </main>
        </section>

      </div>
    )
  }
}

export default App;