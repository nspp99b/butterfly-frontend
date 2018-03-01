import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!props.currentUser

  return (
    <nav className="nav-bar">
      <img className="logo-img" src="butterfly_logo.png" alt="butterfly logo" />
      <h4 className="nav-bar-title">BUTTERFLY</h4>
      { loggedIn ?
        <ul>
          <li className="nav-bar-logout" onClick={props.logout}>Logout</li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
        :
        <ul>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      }
    </nav>
  )
}

export default Navbar
