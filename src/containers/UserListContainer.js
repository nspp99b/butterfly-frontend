import React from 'react';
import UserList from '../components/UserList';
import { connect } from 'react-redux';
import * as actions from '../actions/'

class UserListContainer extends React.Component {

  render() {
    return (
      <article className="userList-container">
        <UserList users={this.props.users} currentUser={this.props.currentUser} />
      </article>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn,
    users: state.usersReducer.users
  }
}

export default connect(mapStateToProps, actions)(UserListContainer)
