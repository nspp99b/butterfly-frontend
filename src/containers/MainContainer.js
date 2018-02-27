import React from 'react'
import UserContainer from './UserContainer'
import FlapsContainer from './FlapsContainer'

const MainContainer = (props) => {
  return (
    <div className="main-wrapper">
      <UserContainer user={props.user}/>
      <FlapsContainer />
    </div>
  )
}

export default MainContainer