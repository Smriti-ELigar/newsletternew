import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   setButton(window.innerWidth > 960);
  // };

  // useEffect(() => {
  //   showButton();
  //   window.addEventListener('resize', showButton);
  //   return () => window.removeEventListener('resize', showButton);
  // }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
      <img src="./logo.jpeg" alt="Serenity Vibes Logo" style={{ height: '47.5px' }} />
    </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'> <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link> </li> 
          <li className='nav-item'> <Link to='/helpline' className='nav-links' onClick={closeMobileMenu}> Helpline </Link> </li>
            </ul>
            </div>
      </nav>
    </>
  );
}
            {/* <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Vibes Team
              </Link>
            </li> */}
            
          
          {/* {button && <Button buttonStyle='btn--outline'>Helpline</Button>} */}


export default Navbar;
