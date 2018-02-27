import React from 'react'

const UserItem = (props) => {
  return (
    <div className="userItem">{props.user.name}</div>
  )
}

export default UserItem