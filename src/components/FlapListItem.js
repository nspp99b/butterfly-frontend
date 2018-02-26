import React from 'react'
import FlapListEffects from './FlapListEffects'

const FlapListItem = (props) => {
  console.log('FlapListItem rendered')
  console.log(props)
  return (
    <div>
      <div>Flap Username / User Image</div>
      <div>{props.flap.content}</div>
      <div onClick={() => props.showEffects(props.flap.id)}>FX: {props.flap.fx_count}</div>
      { props.flap.showFlapEffects === true && < FlapListEffects effects={props.flap.effects}/> }
    </div>
  )
}

export default FlapListItem