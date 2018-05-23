import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/loginUser';

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
    this.setState({
      email:"",
      password:""
    });
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log('login component rendered');
    console.log(this.props);
    return (
      <div className="user-form">
        <form onSubmit={this.handleLogin}>
          <label>Email: </label> <br />
          <input value={this.state.username} type="text" name="email" onChange={this.onInputChange}/> <br />
          <label>Password: </label> <br />
          <input value={this.state.password} type="password" name="password" onChange={this.onInputChange} /> <br />
          <input className="submit-button" type="submit" />
        </form>
        <Link to='/signup'>No Account? Sign Up</Link>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { currentUser: state.usersReducer.currentUser }
};

export default connect(mapStateToProps, { loginUser })(Login);
