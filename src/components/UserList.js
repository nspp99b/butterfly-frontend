import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
  console.log('UserList rendered')
  const usersArray = props.users.map(u => <UserItem key={u.id} user={u} currentUser={props.currentUser}/>)

  return (
    <div>
      {usersArray}
    </div>
  )

}

export default UserList
