import React from 'react';

const UserItem = (props) => {
  return (
    <div className="userItem">
      <div className="userItem-name">{props.user.name}</div>
    </div>
  )
}

export default UserItem
