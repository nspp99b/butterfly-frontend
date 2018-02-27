import React from 'react';
import FlapItem from './FlapItem';

const FlapList = (props) => {
  console.log('FlapList rendered')
  const flapsArray = props.flaps.map(f => <FlapItem key={f.id} flap={f} showEffects={props.showEffects} user={props.user}/>)

  return (
    <div>
      {flapsArray}
    </div>
  )
  
}

export default FlapList