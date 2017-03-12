import React from 'react';
import {connect } from 'react-redux';
import {fetchPostsDetails} from './action'


class PostsDetails extends React.Component{
  /*componentDidMount(){
    this.props.fetchPosts();
  }*/

  state={
      _id:this.props.post ? this.props.post._id : null
  }

  componentDidMount(){
    if(this.props.params._id){
        this.props.fetchPostsDetails(this.props.params._id);
    }
  }


  state ={
    _id:'',
    title:'',
    contant:'',
    errors:{},
    message:'dfg'
  }
  render(){
    return(
      <div>
        <h1> Posts page details</h1>

      </div>
    );
  }
}

PostsDetails.propTypes={
  fetchPostsDetails: React.PropTypes.func.isRequired
}

function mapStateToProps(state,props){
  if (props.params._id){
    return{
      post: state.posts.find(item =>item._id === props.params._id)
    }
  }

  return{
    post:null
  };

}

export default connect(mapStateToProps,{fetchPostsDetails})(PostsDetails);
