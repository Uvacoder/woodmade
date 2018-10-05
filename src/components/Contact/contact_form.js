import React, { Component } from 'react';
import Gmail from '../../images/logo_gmail_64px.png';
import Facebook from '../../images/flogo-RGB-HEX-Blk-72.png';
import Instagram from '../../images/glyph-logo_May2016.png';

import './contact_form.css';

class Contact extends Component {
  handleClick = e => {
    console.log(e);
    e.preventDefault();
    if (e.target.id === 'contact-link') {
      window.open(e.target.alt, '_blank');
    }
  };

  render() {
    return (
      <div className="contact-links">
        <span id="contact-link-span">
          <a href="mailto:troykacz@gmail.com">
            {' '}
            <img
              id="contact-link"
              className="contact-link"
              href="mailto:troykacz@gmail.com"
              src={Gmail}
              alt="email heartmade"
            />
          </a>
          <img
            id="contact-link"
            className="contact-link"
            alt="https://www.facebook.com/heartmadewoodworking/"
            src={Facebook}
            onClick={this.handleClick}
          />
          <img
            id="contact-link"
            className="contact-link"
            alt="https://www.instagram.com/heartmadewoodworking/"
            src={Instagram}
            onClick={this.handleClick}
          />
        </span>
      </div>
    );
  }
}

export default Contact;
