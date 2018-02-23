import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import adapter from '../adapter'
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import MainContainer from './MainContainer';

class App extends Component {
  
  state = {
    auth: { currentUser: null }
  }

  setLoggedInUser = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({
      auth: {
        currentUser: {
          email: user.email,
          id: user.id
        }
      }
    })
  }

  removeLoggedInUser = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: { currentUser: null }
    })
    this.props.history.push('/login')
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      adapter.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: { currentUser: user } })
        } else {
          this.setState({ auth: { currentUser: null } })
        }
      })
    } else {
      console.log('No token found');
    }
  }
  
  render() {
    return (
      <div className="app-wrapper">
        <NavBar currentUser={this.state.auth.currentUser} logOut={this.removeLoggedInUser}/>
        <Route exact path='/login' render={(routerProps) => {
          return <Login history={routerProps.history} setUser={this.setLoggedInUser} />
        }} />

        <Route exact path='/signup' render={(routerProps) => {
          return <Signup history={routerProps.history} setUser={this.setLoggedInUser} />
        }} />
        { this.state.auth.currentUser != null && <MainContainer /> }
      </div>
    );
  }
}
 
export default withRouter(App);
