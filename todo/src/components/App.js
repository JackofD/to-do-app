import React from 'react';
import Header from './Header';
import Sample from '../sample';
import Sidebar from './SideBar';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import base from '../base';
import EditTaskForm from './EditTaskForm';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  //this constructor is used to initialise the state
  constructor(){
    super();

    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      tasks: {},
      currentTask: {}
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

  editTask = (task) => {
    const tasks = { ...this.state.tasks};
    this.setState({tasks});
  }

  setCurrentTask = (key, task) => {
    const tasks = { ...this.state.tasks};
    tasks[key] = task;
    this.setState({currentTask: task});
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

        {/* <button onClick={this.loadSamples}>Sample</button> */}
        <section className="main-content">
          <Sidebar />
          <main className="todo-content">
            <Switch>
              {/* this renders the new task form and the current tasks */}
              <Route exact path="/" render={ () =>
                (
                  <div>
                    <AddTaskForm addTask={this.addTask} />
                    <ul className="task-list">
                      {
                        Object
                          .keys(this.state.tasks)
                          .map(key => <Task key={key} index={key} details={this.state.tasks[key]} updateStatus={this.updateStatus} setCurrentTask={this.setCurrentTask} deleteTask={this.deleteTask} />)
                      }
                    </ul>
                  </div>
                )
              }
              />

              {/* this renders the edit task form */}
              <Route
                path="/edit"
                render={(routeProps) => (
                  <EditTaskForm  {...routeProps} currentDetails={this.state.currentTask} editTask={this.editTask}/>
                )}
              />
            </Switch>
          </main>
        </section>

      </div>
    )
  }
}

export default App;