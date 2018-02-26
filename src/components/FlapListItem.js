import React from 'react'
import FlapList from './FlapList'
import { connect } from 'react-redux';
import * as actions from '../actions';

const FlapListItem = (props) => {
  return (
    <div>
      <div>Flap Username / User Image</div>
      <div>{props.flap.content}</div>
      <div onClick={props.showEffects}>FX: {props.flap.fx_count}</div>
      { props.flap.showFlapEffects == true && < FlapList flaps={props.flap.effects}/> }
    </div>
  )
}

export default connect(null, actions)(FlapListItem)