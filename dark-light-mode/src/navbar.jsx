import React from 'react'
import {Link} from 'react-router-dom';

function navbar() { 
  return (
    <nav className='navbar'>
        <div>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        </div>
    </nav>
  )
}

export default navbar

