import React from 'react';
// import { Link } from 'react-router-dom';

const UserEdit = (props) => {
  console.log('UserEdit rendered')
  console.log(props)

  return (
    <div className="userProfile">
      <img className="userProfile-img" src={props.user.image} alt="" width="280px" height="280px"/>
      <div>
        <span>{props.user.name}</span>
        <div className="userProfile-follow-counts">
          <span>following: {props.user.following.length} | </span>
          <span>followers: {props.user.followers.length}</span>
        </div>
        <div></div>
      </div>


    </div>
  )
}

export default UserEdit
