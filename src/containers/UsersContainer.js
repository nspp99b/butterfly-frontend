import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions'
import UserContainer from './UserContainer';
import UserListContainer from './UserListContainer';
import FlapCreate from '../components/FlapCreate';

class UsersContainer extends React.Component {

  render() {
    console.log('UsersContainer rendered')
    console.log(this.props)
    return (
      <div className="main-wrapper">
        <FlapCreate currentUser={this.props.currentUser} parent={null}/>
        <UserContainer currentUser={this.props.currentUser}/>
        <UserListContainer currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn
  }
}

export default connect(mapStateToProps, {getCurrentUser})(UsersContainer)
