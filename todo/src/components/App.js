import React from 'react';
import Header from './Header';
import Sample from '../sample';
import Task from './Task';

class App extends React.Component {
  //this constructor is used to initialise the state
  constructor(){
    super();

    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      tasks: {}
    }
  }

  loadSamples(){
    this.setState({
      tasks: Sample
    })
  }

  render() {
    return(
      <div>
        <Header />
        <button onClick={this.loadSamples}>Sample</button>
        <ul className="task-list">
          {
            Object
              .keys(this.state.tasks)
              .map(key => <Task key={key} details={this.state.tasks[key]}/>)
          }
        </ul>
      </div>
    )	
  }
}

export default App;