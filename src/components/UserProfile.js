import React from 'react';
// import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  console.log('UserProfile rendered')
  console.log(props)

  const FollowButton = (props) => {
    console.log('display Button fired')
    return (
      props.user.followers.includes(props.currentUser.id) ?
      <button className="userProfile-followbuttons" onClick={() => props.unfollow(props.currentUser.id, props.user.id)}>unfollow</button>
      :
      <button className="userProfile-followbuttons" onClick={() => props.follow(props.currentUser.id, props.user.id)}>follow</button>
    )
  }

  return (
    <div className="userProfile">
      <img className="userProfile-img" src={props.user.image} alt="" width="80px" height="80px"/>
      <div>
        <span>{props.user.name}</span>
          { props.currentUser && props.currentUser.id !== props.user.id && <FollowButton user={props.user} currentUser={props.currentUser} follow={props.follow} unfollow={props.unfollow}/>}
        <div className="userProfile-follow-counts">
          <span>following: {props.user.following.length} | </span>
          <span>followers: {props.user.followers.length}</span>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
