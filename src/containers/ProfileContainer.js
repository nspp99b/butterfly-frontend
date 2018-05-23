import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import UserContainer from './UserContainer';
import FlapListContainer from './FlapListContainer';
import FlapCreate from '../components/FlapCreate';

class ProfileContainer extends React.Component {

  // allow hot reload of profile

  componentWillReceiveProps(nextProps) {
    if (this.props.userToFetch !== nextProps.userToFetch) {
      this.props.fetchUser(nextProps.userToFetch);
    };
  };

  componentDidMount() {
    this.props.fetchUser(this.props.userToFetch);
  };

  render() {
    console.log('ProfileContainer rendered');
    console.log(this.props);
    return (
      <div className="main-wrapper">
        <FlapCreate currentUser={this.props.currentUser} parent={null}/>
        <UserContainer user={this.props.selectedUser} currentUser={this.props.currentUser} follow={this.props.follow} unfollow={this.props.unfollow}/>
        <FlapListContainer />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn,
    selectedUser: state.usersReducer.selectedUser,
  };
};

export default withRouter(connect(mapStateToProps, actions)(ProfileContainer));
