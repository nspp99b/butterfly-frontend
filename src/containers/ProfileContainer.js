import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import UserContainer from './UserContainer';
import FlapListContainer from './FlapListContainer';
import FlapCreate from '../components/FlapCreate';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userToFetch)
  }

  render() {
    console.log('ProfileContainer rendered')
    console.log(this.props)
    return (
      <div className="main-wrapper">
        <FlapCreate currentUser={this.props.currentUser} parent={null}/>
        { this.props.selectedUser && <UserContainer user={this.props.selectedUser}/>}
        { this.props.flaps && <FlapListContainer />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    currentUser: state.usersReducer.currentUser,
    isLoggedIn: state.usersReducer.isLoggedIn,
    userToFetch: ownProps.match.params.userid,
    selectedUser: state.usersReducer.selectedUser,
    flaps: state.flapsReducer.flaps
  }
}

export default withRouter(connect(mapStateToProps, actions)(ProfileContainer))
