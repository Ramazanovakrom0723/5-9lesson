import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <ul className="footer-list">
        <li>396 mi<p>Range (EPA est.)</p></li>
        <li>1.99 <p>0-60 mph*</p></li>
        <li>200 mph <p>Top Speed†</p></li>
        <li>1,020 hp <p>Peak Power</p></li>
      </ul>
    </div>
    <div className="footer-right">
      <button className="order-button">Order Now</button>
    </div>
  </footer>
);

export default Footer;
