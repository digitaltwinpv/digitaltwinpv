import React, { Component } from 'react';
import './App.css';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';

class App extends Component {
  render() {
    
    return (
      <div className="App">    
        <Test1 />
        <Test2 />
        <Test3 />
        <Test4 />
        <Test5 />    
      </div>
      );
    }
    
}

export default App;
