import React from 'react'

const UserProfile = (props) => {
  return (
    <div className="userItem">{props.user.name}</div>
  )
}

export default UserProfile