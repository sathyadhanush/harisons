// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav  className={`navbar ${active ? 'active' : ''}`}>
      
      <a href="#Home" className='active' >Home</a>
      <a href="#Service" className='active'>Service</a>
      <a href="#Gallery" className='active' >Gallery</a>
      <a href="#Client" className='active' >Clients</a>
      <a href="#Contact" className='active'>Contact Us</a>
      
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
