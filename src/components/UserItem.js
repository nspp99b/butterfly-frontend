import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <div className="userItem">
      <div className="userItem-left">
        <img className="userItem-img" src={props.user.image} alt="" width="80px" height="80px"/>
      </div>
      <div className="userItem-right">
        <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>
        <div>
          <span className="userItem-follows">following: {props.user.following.length} | followers: {props.user.followers.length}</span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
