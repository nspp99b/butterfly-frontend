import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!props.currentUser

  return (
    <div className="nav-bar">
      <img className="logo-img" src="butterfly_logo.png" alt="butterfly logo" />
      <li className="nav-bar-title">BUTTERFLY</li>
      <nav>
        <ul>
          { loggedIn ?
          <li className="nav-bar-logout" onClick={props.logOut}>Logout</li>
          :
          <li><Link to='/login'>Login</Link></li>
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar