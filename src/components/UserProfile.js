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
      <span>{props.user.name}</span>
        { props.currentUser && props.currentUser.id !== props.user.id && <FollowButton user={props.user} currentUser={props.currentUser} follow={props.follow} unfollow={props.unfollow}/>}
    </div>

  )
}

export default UserProfile
