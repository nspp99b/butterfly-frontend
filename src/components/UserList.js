import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
  console.log('UserList rendered')
  const usersArray = props.flaps.map(f => <FlapItem key={f.id} flap={f} showEffects={props.showEffects} user={props.user} updateFlap={props.updateFlap}/>)

  return (
    <div>
      {flapsArray}
    </div>
  )
  
}

export default UserList