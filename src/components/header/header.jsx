import React from 'react';
import './header.css';
import TeslaLogo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.svg';
import UserIcon from '../../assets/user-icon.svg';
import MenuIcon from '../../assets/menu-icon.svg';

const Header = ({ onSelectModel }) => (
  <header className="header">
    <div className="header-left">
      <img src={TeslaLogo} alt="Tesla Logo" className="logo" />
      <nav>
        <ul className="nav-list">
          {['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels'].map(model => (
            <li key={model} onClick={() => onSelectModel(model)} className="nav-item">
              {model}
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="header-right">
      <div className='Search'>
        <img  src={SearchIcon} alt="Search" className="icons" />
        </div>
      <img src={UserIcon} alt="User" className="icon" />
      <img src={MenuIcon} alt="Menu" className="icon" />
    </div>
  </header>
);

export default Header;
