import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router';
import './App.css';
import FluxCartApp from './components/FluxCartApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FluxCartApp />
      </div>
    );
  }
}

export default App;
