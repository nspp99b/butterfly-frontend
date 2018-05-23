import React from 'react';
import { signupUser, editUser } from '../actions';
import { connect } from 'react-redux';

class Signup extends React.Component {
  state = {
    name: this.props.currentUser.name,
    email: this.props.currentUser.email,
    image: this.props.currentUser.image,
    password: '',
    password_confirmation: ''
  };

  handleSignup = (e) => {
    e.preventDefault();
    if (this.props.currentUser.id >= 1) {
      this.props.handleShowEdit();
      this.props.editUser(this.props.currentUser.id, this.state);
    } else {
      this.props.signupUser(this.state);
    };
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitButtonValue = () => {
    if (this.props.currentUser.id >= 1) {
      return "Update";
    } else {
      return "Sign Up";
    };
  };

  render() {
    console.log('Signup Component Rendered');
    console.log(this.props);
    
    return (
      <form className="user-form" onSubmit={this.handleSignup}>

        <label>Name: </label> <br />
        <input value={this.state.name} name="name" type="text" onChange={this.onInputChange}></input> <br/>

        <label>Email: </label> <br />
        <input value={this.state.email} name="email" type="text" onChange={this.onInputChange}></input> <br/>

        <label>Image (full URL): </label> <br />
        <input value={this.state.image} name="image" type="text" onChange={this.onInputChange}></input> <br/>

        <label>Password: </label> <br />
        <input value={this.state.password} name="password" type="password" onChange={this.onInputChange}></input> <br/>

        <label>Confirm password:</label> <br />
        <input value={this.state.password_confirmation} name="password_confirmation" type="password" onChange={this.onInputChange}></input> <br/>

        <input className="submit-button" type="submit" value={this.submitButtonValue()} />
      </form>
    );
  };
};

export default connect(null, { signupUser, editUser })(Signup);
