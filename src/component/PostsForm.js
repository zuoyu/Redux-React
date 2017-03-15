import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { savePost } from '../action';
import { Redirect } from 'react-router';

class PostsForm extends React.Component{

  state ={
    title:'',
    contant:'',
    errors:{},
    loading:false,
    done:false
  }

//when enter the text into the input box
  handlChange = (e) =>{
    if(!!this.state.errors[e.target.name]){
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    }else{
      this.setState({[e.target.name]:e.target.value});
    }
  }

    //when click the save button
  handleSubmit =(e) =>{
    e.preventDefault();
    //validation
    let errors={};
    if(this.state.title === '') errors.title="Can't be empty";
    if(this.state.contant === '') errors.contant="Can't be empty";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid){
      const { title, contant } = this.state;
      const newdata ={
        'title':title,
        'contant':contant
      }
      console.log(newdata);
      this.setState({ loading:true });
      this.props.savePost("title="+title+"&contant="+contant,newdata).then(
        ()=>this.setState({loading:false, done:true}),
        (err)=> err.response.then(({errors})=> this.setState({errors, loading:false}))
      );
    }

  }

  render(){
      const form = (
        <form className={classnames('ui','form',{loading:this.state.loading})} onSubmit={this.handleSubmit}>
          <h1>Add new post</h1>

          {!!this.state.errors.global&&<div className="ui negative message"><p>{this.state.errors.global}</p></div>}
          <div className={classnames('field',{error:!!this.state.errors.title})}>
            <label htmlFor="title"> Title </label>
            <input
              name="title"
              value={this.state.tile}
              onChange={this.handlChange}
              id="title"/>
              <span>{this.state.errors.title}</span>
          </div>


          <div className={classnames('field',{error:!!this.state.errors.contant})}>
            <label htmlFor="contant"> contant</label>
            <input
              name="contant"
              value={this.state.contant}
              onChange={this.handlChange}
              id="contant"/>
          </div>
          <span>{this.state.errors.contant}</span>

          <div className="field">
            <button className="ui primary button"> Save</button>
          </div>
        </form>
      );
      return(
        <div>
          {this.state.done ? <Redirect to="/posts" /> : form}
        </div>
      )
  }
}


export default connect(null,{ savePost })(PostsForm);
