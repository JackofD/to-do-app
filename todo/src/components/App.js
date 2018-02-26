import React from 'react';
import Header from './Header';
//import Sample from '../sample';
import Todo from './Todo';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        App page
        <Todo />
      </div>
    )	
  }
}

export default App;