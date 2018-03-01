import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <div className="userItem">
      <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>
    </div>
  )
}

export default UserItem
