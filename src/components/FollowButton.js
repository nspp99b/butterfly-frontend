import React from 'react';

const FollowButton = (props) => {
  console.log('FollowButton rendered');
  
  return (
    props.user.followers.includes(props.currentUser.id) ?
    <button className="userProfile-followbuttons" onClick={() => props.unfollow(props.currentUser.id, props.user.id)}>unfollow</button>
    :
    <button className="userProfile-followbuttons" onClick={() => props.follow(props.currentUser.id, props.user.id)}>follow</button>
  );
};

export default FollowButton;
