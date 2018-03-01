import React from 'react';
import FlapList from '../components/FlapList';
import { connect } from 'react-redux';
import * as actions from '../actions/'

class FlapListContainer extends React.Component {

  render() {
    return (
      <article className="flaps-container">
        <FlapList flaps={this.props.flaps} showEffects={this.props.showEffects} currentUser={this.props.currentUser} updateFlap={this.props.updateFlap}/>
      </article>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
    flaps: state.flapsReducer.flaps
  }
}

export default connect(mapStateToProps, actions)(FlapListContainer)
