import React from 'react';
import FlapListItem from './FlapListItem';

const FlapList = (props) => {
  console.log('FlapList rendered')
  const flapsArray = props.flaps.map(f => <FlapListItem key={f.id} flap={f} showEffects={props.showEffects}/>)

  return (
    <div>
      {flapsArray}
    </div>
  )
  
}

export default FlapList