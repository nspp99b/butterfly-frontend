import React from 'react'
import UserItem from '../components/UserItem'

const UserContainer = (props) => {
  
  return (
    <aside className="user-container">
      < UserItem user={props.user}/>
    </aside>
  )

}

export default UserContainer