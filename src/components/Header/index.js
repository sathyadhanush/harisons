import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  
  faBars,
 
} from '@fortawesome/free-solid-svg-icons';


import './Header.css';
import Navbar from './Navbar';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  window.onscroll = () => {
  
   
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
 
  };
 
  return (
    <header className="header">
       <div className="box">
       <img width="95px" src="logo.jpeg" alt="" />
      
      </div>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
   
      </div>
  
    </header>
  );
}
