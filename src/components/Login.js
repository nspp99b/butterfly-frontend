import React from 'react';
import adapter from '../adapter'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleLogin = (e) => {
    e.preventDefault()
    adapter.auth.login(this.state.email, this.state.password).then(res => {
      if (res.error) {
        alert(res.error)
      } else {
        this.props.history.push("/")
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
    )
  }
}

export default Login