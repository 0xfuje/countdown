import React, { Component } from 'react';
import Counter from './Counter';
import './style/App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
      </div>
    )
  }
}

export default App;
