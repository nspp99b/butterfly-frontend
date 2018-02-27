import React from 'react'
import UserContainer from './UserContainer'
import FlapsContainer from './FlapsContainer'
import FlapCreate from '../components/FlapCreate'

const MainContainer = (props) => {
  return (
    <div className="main-wrapper">
      <FlapCreate user={props.user}/>
      <UserContainer user={props.user}/>
      <FlapsContainer />
    </div>
  )
}

export default MainContainer