import React from 'react';
import FlapList from '../components/FlapList';
import { connect } from 'react-redux';
import * as actions from '../actions/'

class FlapsContainer extends React.Component {
  
  componentDidMount() {
    this.props.fetchFlaps()
  }
  
  render() {  
    return (
      <article className="flaps-container">
        <FlapList flaps={this.props.flaps} showEffects={this.props.showEffects}/> 
      </article>
    )    
  }

}

const mapStateToProps = (state) => {
  return {flaps: state.flapsReducer.flaps}
}

export default connect(mapStateToProps, actions)(FlapsContainer)