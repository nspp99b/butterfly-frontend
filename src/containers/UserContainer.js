import React from 'react';
import UserProfile from '../components/UserProfile';

const UserContainer = (props) => {
  console.log('User Container Rendered');
  console.log(props);
  return (
    <aside className="user-container">
      < UserProfile user={props.user} currentUser={props.currentUser} follow={props.follow} unfollow={props.unfollow}/>
    </aside>
  );
};

export default UserContainer;
