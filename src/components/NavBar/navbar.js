import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Education</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Projects</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Skills</Link>
      </div>
      <button className="desktopMenubtn" onClick={() => {
          document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});

      }} >
        <img src={contactImg} alt='contact' className="desktopMenuImg" />Contact Me</button>
    </nav>
  )
}

export default Navbar
