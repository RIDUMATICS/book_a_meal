import React from 'react'
import logo from '../../public/images/logo.png';

const Menu = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="iya-pato logo"/>
        IYA PATO
      </div>
      <ul>
        <li>Sign Up</li>
        <li>LogIn</li>
      </ul>
  </nav>
  )
}

export default Menu;
