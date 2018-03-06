import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <div className="userItem">
      <img className="userProfile-img" src={props.user.image} alt="" width="80px"/>
      <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>
      <span className="userItem-follows">following: {props.user.following.length}</span>
      <span className="userItem-follows">followers: {props.user.followers.length}</span>
    </div>
  )
}

export default UserItem
