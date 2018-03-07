import React from 'react';
import '../styles.css';
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

  componentDidMount() {
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

        <Route exact path="/login" render={() => (localStorage.getItem('token') ? (<Redirect to="/main"/>) : (<Login/>))}/>
        <Route exact path="/signup" render={() => (this.props.isLoggedIn ? (<Redirect to="/main"/>) : (<Signup currentUser={this.props.currentUser}/>))}/>
        <Route exact path="/main" render={() => (localStorage.getItem('token') ? (<MainContainer currentUser={this.props.currentUser}/>) : (<Redirect to="/login"/>))}/>
        <Route exact path="/profile" render={(props) => (localStorage.getItem('token') ? (<ProfileContainer userToFetch={this.props.currentUser.id}/>) : (<Redirect to="/login"/>))}/>
        <Route exact path="/users/:userid" render={(props) => (localStorage.getItem('token') ? (<ProfileContainer userToFetch={props.match.params.userid}/>) : (<Redirect to="/login"/>))}/>
        <Route exact path="/users" render={() => (localStorage.getItem('token') ? (<UsersContainer/>) : (<Redirect to="/login"/>))}/>

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
