import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Match } from 'react-router';
import PostsPage from './PostsPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="posts">Posts</Link>
        </p>

        <Match pattern="/posts" component={PostsPage} />
      </div>
    );
  }
}

export default App;
