import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import MainContainer from './MainContainer';

class App extends React.Component {
  
  state = {
    auth: { currentUser: null }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.getCurrentUser();
    } else {
      console.log('No token found');
    }
  }
  
  render() {
    return (
      <div className="app-wrapper">
        <NavBar currentUser={this.props.currentUser} logout={this.props.logoutUser}/>
        <Route exact path="/login" render={() => (this.props.isLoggedIn ? (<Redirect to="/main"/>) : (<Login/>))}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path="/main" render={() => (this.props.isLoggedIn ? (<MainContainer/>) : (<Redirect to="/login"/>))}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn
   }
}
 
export default withRouter(connect(mapStateToProps, actions)(App));

// export default withRouter(connect((state) => ({ auth: state.auth }), { currentUser, logOut })(App));
