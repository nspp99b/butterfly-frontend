import React from 'react'

const UserProfile = (props) => {
  console.log('UserProfile rendered')
  return (
    <div className="userProfile">{props.user.name}</div>
  )
}

export default UserProfile
