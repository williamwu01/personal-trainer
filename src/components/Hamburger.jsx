import React, { useState } from 'react';
import '../styles/organisms/hamburger.css';

const HamburgerMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={`hamburger-menu ${click ? 'open' : ''}`}>
      <label htmlFor="navi-toggle" className={`menu-label`} onClick={handleClick}>
        <span className={`icon ${click ? "clicked" : ""}`}>&nbsp;</span>
      </label>
      <div className={`nav-background ${click ? "clicked" : ""}`}>&nbsp;</div>

      <nav className={`navigation ${click ? "clicked" : ""}`}>
        <ul className={`list`}>
          <li>
            <a href="/" className={`item-link`} onClick={handleClick}>Home</a>
          </li>
          <li>
            <a href="/about" className={`item-link`} onClick={handleClick}>About</a>
          </li>
          <li>
            <a href="/portfolio" className={`item-link`} onClick={handleClick}>Portfolio</a>
          </li>
          <li>
            <a href="/blog" className={`item-link`} onClick={handleClick}>Blog</a>
          </li>
          <li>
            <a href="/contact" className={`item-link`} onClick={handleClick}>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
