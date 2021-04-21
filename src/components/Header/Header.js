import React from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import Color from '../../styles/Colors.module.scss';
import Font from '../../styles/Font.module.scss';

const Header = () => (
  <>
    <header className="header">
      <div className={`nav ${Color.default} ${Font.is_xl}`}><FiArrowLeft /></div>
      <div className={`title ${Color.default} ${Font.is_lg}`}><h1>Recipetly</h1></div>
      <div className={`search ${Color.default} ${Font.is_xl}`}><FiSearch /></div>
    </header>
  </>
);

export default Header;
