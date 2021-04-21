import React from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import Color from '../../styles/modules/Colors.module.scss';
import Font from '../../styles/modules/Font.module.scss';
import Background from '../../styles/modules/Background.module.scss';

const Header = () => (
  <>
    <header className={`header ${Background.dark}`}>
      <div className={`nav ${Color.white} ${Font.is_xl}`}><FiArrowLeft /></div>
      <div className={`title ${Color.white} ${Font.is_lg}`}><h1>Recipetly</h1></div>
      <div className={`search ${Color.white} ${Font.is_xl}`}><FiSearch /></div>
    </header>
  </>
);

export default Header;
