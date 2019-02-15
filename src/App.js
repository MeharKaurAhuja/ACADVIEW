import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hi, I am React App!</h1>
        <br/>
        <div className="cards">
            <Display name='John' age='31' birthMonth='June' birthYear='1998'/>
            <input type="text"></input>
        </div>
        <br/>
        <div className="cards">
            <Display name='Rick' age='45' birthMonth='July' birthYear='1996'/>
            <input type="text"></input>
        </div>
      </div>
    );
  }
}

export default App;
