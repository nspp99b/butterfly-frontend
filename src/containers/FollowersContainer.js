import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import UserContainer from './UserContainer';
import UserListContainer from './UserListContainer';
import FlapCreate from '../components/FlapCreate';

class FollowersContainer extends React.Component {

  // get followers on mount

  componentDidMount() {
    this.props.fetchFollowers(this.props.userToFetch)
  };

  render() {
    console.log('FollowersContainer rendered');
    console.log(this.props);
    return (
      <div className="main-wrapper">
        <FlapCreate currentUser={this.props.currentUser} parent={null}/>
        <UserContainer user={this.props.currentUser} currentUser={this.props.currentUser}/>
        <UserListContainer />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps, actions)(FollowersContainer));
