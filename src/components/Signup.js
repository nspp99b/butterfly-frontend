import React from 'react';
import adapter from '../adapter';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleSignup = (e) => {
    e.preventDefault()
    adapter.auth.signup(this.state).then(res => {
      if (res.error) {
        alert(res.error)
      } else {
        this.props.history.push('/')
        this.props.setUser(res)
      }
    })
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className="user-form" onSubmit={this.handleSignup}>

        <label>Name: </label> <br />
        <input value={this.state.name} name="name" type="text" onChange={this.onInputChange}></input> <br/>

        <label>Email: </label> <br />
        <input value={this.state.email} name="email" type="text" onChange={this.onInputChange}></input> <br/>

        <label>Password: </label> <br />
        <input value={this.state.password} name="password" type="password" onChange={this.onInputChange}></input> <br/>

        <label>Confirm password:</label> <br />
        <input value={this.state.password_confirmation} name="password_confirmation" type="password" onChange={this.onInputChange}></input> <br/>

        <input className="submit-button" type="submit" value="Sign Up" />
      </form>
    )
  }
}

export default Signup