import React from 'react'
import logo from '../images/logo.jpg'
import '../style/header.scss'


function Header() {


    return (
    <div id="header">
        <div className="header_inner container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="nav">
                <a href="#header" alt="">Home</a>
                <a href="#services" alt="">Services</a>
                <a href="#portfolio" alt="">Portfolio</a>
                <a href="#team" alt="">Team</a>
                <a href="#contact" alt="">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Header
