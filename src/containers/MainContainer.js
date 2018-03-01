import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions'
import UserContainer from './UserContainer';
import FlapListContainer from './FlapListContainer';
import FlapCreate from '../components/FlapCreate';

class MainContainer extends React.Component {

  render() {
    console.log('MainContainer rendered')
    console.log(this.props)
    return (
      <div className="main-wrapper">
        <FlapCreate currentUser={this.props.currentUser} parent={null}/>
        <UserContainer currentUser={this.props.currentUser}/>
        <FlapListContainer currentUser={this.props.currentUser}/>
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

export default connect(mapStateToProps, {getCurrentUser})(MainContainer)
