import React from 'react';
import PostsList from './PostsList'
import {connect } from 'react-redux';
import {fetchPosts} from './action'

class PostsPage extends React.Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    return(
      <div>
        <h1> Posts page</h1>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

PostsPage.propTypes={
  posts:React.PropTypes.array.isRequired,
  fetchPosts: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    posts:state.posts
  }
}

export default connect (mapStateToProps, {fetchPosts})(PostsPage);
