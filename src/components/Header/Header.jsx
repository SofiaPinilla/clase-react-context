import React from 'react'
import './Header.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <span>Header</span>
        <div>
            <span> <Link to="/">Home</Link></span>
            <span><Link to="/form">Form</Link></span>
        </div>
    </nav>
  )
}

export default Header