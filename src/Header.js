import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


/** Main header and nav bar */

function Header() {
  return (
    <div className="Header">
      <h1>Microblog</h1>
      <p>Get in the Rithm of blogging!</p>

      <div>
        <Link to="/">Blog</Link>
        <Link to="/new">Add a Post</Link>
      </div>
    </div>
  )
}

export default Header;