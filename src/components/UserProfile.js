import React from 'react'

const UserProfile = (props) => {
  return (
    <div className="userProfile">{props.currentUser.name}</div>
  )
}

export default UserProfile
