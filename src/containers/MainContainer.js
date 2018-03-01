import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions'
import UserContainer from './UserContainer';
import FlapsContainer from './FlapsContainer';
import FlapCreate from '../components/FlapCreate';

class MainContainer extends React.Component {
  
  render() {
    console.log('MainContainer rendered')
    console.log(this.props)
    return (
      <div className="main-wrapper">
        <FlapCreate user={this.props.currentUser} parent={null}/>
        <UserContainer user={this.props.currentUser}/>
        <FlapsContainer user={this.props.currentUser}/>
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