import React from 'react';
import UserList from '../components/UserList';
import { connect } from 'react-redux';
import * as actions from '../actions/'

class UsersContainer extends React.Component {
  
  componentDidMount() {
    // this.props.fetchUsers()
  }
  
  render() {  
    return (
      <article className="flaps-container">
        <UserList flaps={this.props.flaps} showEffects={this.props.showEffects} user={this.props.user} updateFlap={this.props.updateFlap}/> 
      </article>
    )    
  }

}

const mapStateToProps = (state) => {
  return {flaps: state.flapsReducer.flaps}
}

export default connect(mapStateToProps, actions)(UsersContainer)