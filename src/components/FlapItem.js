import React from 'react';
import FlapList from './FlapList'

const FlapItem = (props) => {
  
    console.log('FlapItem rendered')
    console.log(props)
    return (
      <div>
        <div>{props.flap.user.name}</div>
        <div>{props.flap.content}</div>
        <div onClick={() => props.showEffects(props.flap.id)}>FX: {props.flap.fx_count}</div>
        { props.flap.showFlapEffects === true && < FlapList flaps={props.flap.effects} showEffects={props.showEffects}/> }
      </div>
    )

}

export default FlapItem