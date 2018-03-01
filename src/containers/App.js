import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import MainContainer from './MainContainer';
import UsersContainer from './UsersContainer';
import ProfileContainer from './ProfileContainer';

class App extends React.Component {

  state = {
    auth: { currentUser: null }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.getCurrentUser();
    } else {
      console.log('No token found');
    }
  }

  render() {
    console.log('app rendered')
    return (
      <div className="app-wrapper">
        <NavBar currentUser={this.props.currentUser} logout={this.props.logoutUser}/>

        <Route exact path="/login" render={() => (this.props.isLoggedIn ? (<Redirect to="/main"/>) : (<Login/>))}/>
        <Route exact path="/signup" render={() => (this.props.isLoggedIn ? (<Redirect to="/main"/>) : (<Signup/>))}/>
        <Route exact path="/main" render={() => (this.props.isLoggedIn ? (<MainContainer/>) : (<Redirect to="/login"/>))}/>
        <Route path="/users/:userid" render={() => (this.props.isLoggedIn ? (<ProfileContainer/>) : (<Redirect to="/login"/>))}/>
        <Route exact path="/users" render={() => (this.props.isLoggedIn ? (<UsersContainer/>) : (<Redirect to="/login"/>))}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn,
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));
