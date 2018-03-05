import React from 'react';
// import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  console.log('UserProfile rendered')
  console.log(props)

  return (
    <div className="userProfile">
      <span>{props.user.name}</span>
        { props.user.followers.includes(props.currentUser.id) ?
          <button className="userProfile-followbuttons" onClick={props.unfollow}>unfollow</button>
          :
          <button className="userProfile-followbuttons" onClick={() => props.follow(props.currentUser.id, props.user.id)}>follow</button>
        }
    </div>

  )
}

export default UserProfile
