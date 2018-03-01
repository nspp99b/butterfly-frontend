import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserContainer from './UserContainer';
import UserListContainer from './UserListContainer';
import FlapCreate from '../components/FlapCreate';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    console.log('UsersContainer rendered')
    console.log(this.props)
    return (
      <div className="main-wrapper">
        <FlapCreate currentUser={this.props.currentUser} parent={null}/>
        <UserContainer user={this.props.currentUser}/>
        <UserListContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn,
  }
}

export default connect(mapStateToProps, actions)(UsersContainer)
