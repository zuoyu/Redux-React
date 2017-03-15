import React, { Component } from 'react';
//import logo from './logo.svg';
import { Link, Match } from 'react-router';
import PostsPage from './component/PostsPage';
import PostsForm from './component/PostsForm';
import PostsDetails from './component/PostsDetails';
import './App.css';

class App extends Component {
  render() {
    //contain the nav bar and linked page
    return (
      <div>
        <div className="ui three column doubling stackable grid container">

        <Link className="column" activeClassName="active" activOnlyWhenExact to="/">Home</Link>

        <Link className="column" activeClassName="active" activOnlyWhenExact to="/posts">Post</Link>

        <Link className="column" activeClassName="active" activOnlyWhenExact to="/posts/new">NewPost</Link>

        </div>

        <Match exactly pattern="/posts" component={PostsPage} />
        <Match pattern="/posts/new" component={PostsForm} />
        <Match pattern="/posts/:_id" component={PostsDetails} />
      </div>
    );
  }
}

export default App;
