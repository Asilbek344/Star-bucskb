import React from 'react'
import "./Header.css"

const Header = () => {
  return (
  <header>
<div className="container header-cn">
    <h1 className='logo'>StarBucks </h1>
    <ul>
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">Select</a>
        </li>
        <li>
            <a href="">Shop</a>
        </li>
        
    </ul>
</div>
  </header>
  )
}

export default Header
