import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className='column is-12 custom-footer'>
        <div className="content has-text-centered">
          <p><strong>Contact Us</strong></p>
          <p>Address: Vedra London, Forge & Co 154 Shoreditch High Street E1 6HU London</p>
          <p>Phone: +44 (0)20 34750752</p>
          <p>Email: info@vedra.io</p>
          <p>©2018 VEDRA. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
