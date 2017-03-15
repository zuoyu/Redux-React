import React from 'react';
import {connect } from 'react-redux';
import {fetchPostsDetails} from '../action'
import {fetchCommends} from '../action'
import {postComment} from '../action'
import DetailsList from './DetailsList'
import CommendShow from './CommendShow'
import { Redirect } from 'react-router';
import classnames from 'classnames';



class PostsDetails extends React.Component{
  /*componentDidMount(){
    this.props.fetchPosts();
  }*/

  state={
      _id:this.props.post ? this.props.post._id : null,
      post_id:this.props.params._id,
      commend:'',
      error:{},
      loading:false
  }


//when enter the text into the input box
  handlChange = (e) =>{
    if(!!this.state.error[e.target.name]){
      let error = Object.assign({},this.state.errors);
      delete error[e.target.name];
      this.setState({
        [e.target.name]:e.target.value,
        error
      });
    }else{
      this.setState({[e.target.name]:e.target.value});
    }
  }

  //when click the commet button
  handleSubmit=(e)=>{
    e.preventDefault();
    //validation
    console.log(this.state.comment);
    let error={};
    if(this.state.comment === '') error.comment = "Can't be empty";
    this.setState({error});
    const isValid =Object.keys(error).length === 0;
    if (isValid){
      const {commend,post_id} =this.state;
      console.log({commend,post_id});
      console.log("commend="+commend+"&post_id="+this.props.params._id);
      console.log(this.props.params._id);
      this.setState({loading:true});
      this.props.postComment("commend="+commend+"&post_id="+this.props.params._id).then(
        ()=>this.setState({loading:false, done:true}),
        (err)=> err.response.then(({errors})=> this.setState({errors, loading:false}))
      );
    }
  }

  componentDidMount(){
    if(this.props.params._id){
        this.props.fetchPostsDetails(this.props.params._id);
    }
  }

  render(){
    const form =(
      <form className={classnames('ui','form',{loading:this.state.loading})} onSubmit={this.handleSubmit}>
        <div className={classnames('field',{error:!!this.state.error.comment})}>
          <label htmlFor="comment"> Comment</label>
          <input
            id="commend"
            name="commend"
            value={this.state.comment}
            onChange={this.handlChange}
          />
          <span>{this.state.error.comment}</span>
        </div>
        <div className="field">
          <button className="ui primary button"> Comment</button>
        </div>
      </form>
    )
    if (this.props.params._id != 'new'){
    return(
      <div>
      <div>
        <h1> Posts page details</h1>
        <DetailsList details={this.props.details}/>
        <br/>
        </div>
        <div>
          {this.state.done ? window.location.reload() : form}
        </div>
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
  details:React.PropTypes.object.isRequired
}

function mapStateToProps(state,props){
  if (props.params._id){
    return{
      details: state.details
    }
  }
  return{
    details:null
  };

}

export default connect(mapStateToProps,{fetchPostsDetails, postComment})(PostsDetails);
