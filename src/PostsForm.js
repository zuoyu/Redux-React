import React from 'react';
import classnames from 'classnames';

class PostsForm extends React.Component{

  state ={
    title:'',
    contant:'',
    errors:{}
  }

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
  handleSubmit =(e) =>{
    e.preventDefault();

    //validation
    let errors={};
    if(this.state.title === '') errors.title="Can't be empty";
    if(this.state.contant === '') errors.contant="Can't be empty";
    this.setState({ errors });

  }

  render(){
    return(
      <form class="ui form" onSubmit={this.handleSubmit}>
        <h1>Add new post</h1>
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
  }
}


export default PostsForm;
