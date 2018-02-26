import React from 'react';
import FlapListItem from './FlapListItem';
import { connect } from 'react-redux';
import * as actions from '../actions';

const FlapList = (props) => {
  // debugger
  const flapsArray = props.flaps.map(f => <FlapListItem key={f.id} flap={f} showEffects={props.showEffects}/>)

  return (
    <div>
      {flapsArray}
    </div>
  )
  
}

const mapStateToProps = (state) => {
  return {flaps: state.flaps}
}

export default connect(mapStateToProps, actions)(FlapList)