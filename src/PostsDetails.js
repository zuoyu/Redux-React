import React from 'react';
import {connect } from 'react-redux';
import {fetchPostsDetails} from './action'
import {fetchCommends} from './action'
import DetailsList from './DetailsList'
import CommendShow from './CommendShow'


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


  render(){
    if (this.props.params._id != 'new'){
      //console.log(this.props.commends);
    return(
      <div>
        <h1> Posts page details</h1>
        <DetailsList details={this.props.details}/>
      </div>


    );
  }else{
    return(
      <div>

      </div>
    )

  }
}
}

PostsDetails.propTypes={
  fetchPostsDetails: React.PropTypes.func.isRequired,
  //fetchCommends: React.PropTypes.func.isRequired,
  details:React.PropTypes.object.isRequired,
  //commends:React.PropTypes.array.isRequired

}

function mapStateToProps(state,props){
  if (props.params._id){
    return{
      details: state.details,
      //commends:state.commends
    }
  }

  return{
    details:null,
    //commend:null
  };

}

export default connect(mapStateToProps,{fetchPostsDetails})(PostsDetails);
