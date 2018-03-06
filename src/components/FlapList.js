import React from 'react';
import FlapItem from './FlapItem';

const FlapList = (props) => {
  console.log('FlapList rendered')
  const flapsArray = props.flaps.map(f => <FlapItem key={f.id} flap={f} currentUser={props.currentUser} updateFlap={props.updateFlap}/>)

  return (
    <div>
      {flapsArray}
    </div>
  )

}

export default FlapList
