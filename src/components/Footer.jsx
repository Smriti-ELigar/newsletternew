import React from 'react';
import './Footer.css';

function Footer() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          Views and opinions mentioned in our articles do not reflect the views of the editorial team, and they are in no way responsible for any fallout.
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Address</h2>
            <p>Mantri Serenity,</p>
            <p>Doddakallasandra,</p>
            <p>Kanakapura Road,</p>
            <p>Bengaluru - 560062</p>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <p onClick={() => copyToClipboard('9845999530')}>Mrs. Anuradha Peri: 9845999530</p>
            <p onClick={() => copyToClipboard('9980129169')}>Mrs. Kavitha Shivram: 9980129169</p>
            <p onClick={() => copyToClipboard('9845303574')}>Mr. Sreenivas: 9845303574</p>
            <p onClick={() => window.location.href = 'mailto:smritieligar1005@gmail.com'}>Ms. Smriti Eligar : smritieligar2004@gmail.com</p>

          </div>
        </div>
      </div>

      <small className='website-rights'>Serenity Vibes © 2024</small>
    </div>
  );
}

export default Footer;
