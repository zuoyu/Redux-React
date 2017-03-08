import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Match } from 'react-router';
import PostsPage from './PostsPage';
import PostsForm from './PostsForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="ui three column doubling stackable grid container">

        <Link className="column" activeClassName="active" activOnlyWhenExact to="/">Home</Link>

        <Link className="column" activeClassName="active" activOnlyWhenExact to="/posts">Post</Link>

        <Link className="column" activeClassName="active" activOnlyWhenExact to="/posts/new">NewPost</Link>

        </div>

        <Match exactly pattern="/posts" component={PostsPage} />
        <Match pattern="/posts/new" component={PostsForm} />
      </div>
    );
  }
}

export default App;
