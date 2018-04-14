import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

class Example extends Component {
    render(){
        return(
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Example Page</h1>
            </header>
          </div>
        )
    }
}

export default Example;