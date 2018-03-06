import React from 'react';
import Header from './Header';
import Sample from '../sample';
import Sidebar from './SideBar';
import Task from './Task';
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
            <ul className="task-list">
              {
                Object
                  .keys(this.state.tasks)
                  .map(key => <Task key={key} details={this.state.tasks[key]}/>)
              }
            </ul>
          </main>
        </section>

      </div>
    )
  }
}

export default App;