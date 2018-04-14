import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main.js';
import Example from './components/Example.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/example" component={Example} />
        </div>
      </Router>
    );
  }
}

export default App;
