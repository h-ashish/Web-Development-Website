import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
// import './Navbar.css';

function Navbar () {
  const [click, setClick] = useState (false);

  const handleClick = () => setClick (! click);
  const closeMobileMenu = () => setClick (false);



  return (
    <>
      <nav className = 'navbar'>
        <div className = 'navbar-container'>
          <Link to = '/' className = 'navbar-logo' onClick = {closeMobileMenu} >
            
            <i className = 'far fa-gem' onClick={()=>scroll.scrollToTop()}/>
          </Link>
          <div className = 'menu-icon' onClick = {handleClick}>
            <i className = {click? 'fas fa-times': 'fas fa-bars'} />
          </div>
          <ul className = {click? 'nav-menu active': 'nav-menu'}>

            <li className = 'nav-item' onClick={()=>scroll.scrollToTop()}>
              <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className = 'nav-item'>
              <Link to = '/about' className = 'nav-links' onClick = {closeMobileMenu}>
                ABOUT
              </Link>
            </li>

            <li className = 'nav-item'>
              <ScrollLink 
              to = 'work' 
              className = 'nav-links' 
              onClick = {closeMobileMenu} 
              smooth={true} 
              duration={1000}>
                WORK
              </ScrollLink>
            </li>

            <li className = 'nav-item'>
              <ScrollLink 
              to = 'process' 
              className = 'nav-links' 
              onClick = {closeMobileMenu} 
              smooth={true} 
              duration={1000}>
                PROCESS
              </ScrollLink>
            </li>

            <li className = 'nav-item'>
              <ScrollLink
                to = 'services'
                className = 'nav-links'
                onClick = {closeMobileMenu}
                smooth={true} 
                duration={1000}
              >
                SERVICES
              </ScrollLink>
            </li>
            <li className = 'nav-item'>
              <ScrollLink
                to = 'testimonials'
                className = 'nav-links' 
                onClick = {closeMobileMenu}
                smooth={true} 
                duration={1000}
                >
                TESTIMONIALS
              </ScrollLink>
            </li>
            <li className = 'nav-item'>
              <ScrollLink
                to = 'contact'
                className = 'nav-links' 
                onClick = {closeMobileMenu}
                smooth={true} 
                duration={1000}>
                CONTACT
              </ScrollLink>
            </li>
          </ul>
        </div>
        </nav>
    </>
  );
}

export default Navbar;