import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import UserContainer from './UserContainer';
import FlapListContainer from './FlapListContainer';
import FlapCreate from '../components/FlapCreate';

class MainContainer extends React.Component {

  componentDidMount() {
    this.props.fetchFlaps()
  }

  render() {
    console.log('MainContainer rendered')
    console.log(this.props)
    return (
      <div className="main-wrapper">
        <FlapCreate currentUser={this.props.currentUser} parent={null}/>
        <UserContainer user={this.props.currentUser}/>
        <FlapListContainer />
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

export default connect(mapStateToProps, actions)(MainContainer)
