import React from 'react'
import UserContainer from './UserContainer'
import FlapsContainer from './FlapsContainer'
import FlapCreate from '../components/FlapCreate'

const MainContainer = (props) => {
  return (
    <div className="main-wrapper">
      <FlapCreate user={props.user} parent={props.parent}/>
      <UserContainer user={props.user}/>
      <FlapsContainer user={props.user}/>
    </div>
  )
}

export default MainContainer