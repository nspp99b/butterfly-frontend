import React from 'react'

const UserProfile = (props) => {
  return (
    <div className="userProfile">{props.user.name}</div>
  )
}

export default UserProfile
