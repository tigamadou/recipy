import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import Color from '../../styles/modules/Colors.module.scss';
import Font from '../../styles/modules/Font.module.scss';
import Background from '../../styles/modules/Background.module.scss';

const Header = ({ data }) => (
  <>
    <header className={`header ${Background.dark}`}>
      <div className={`nav ${Color.white} ${Font.is_xl}`}>
        {data.back && <FiArrowLeft />}
      </div>
      <div className={`title ${Color.white} ${Font.is_lg}`}><h1>{data.title}</h1></div>
      <div className={`search ${Color.white} ${Font.is_xl}`}>
        {data.search && <FiSearch />}
      </div>
    </header>
  </>
);

Header.propTypes = {
  data: PropTypes.instanceOf(Object),
};
Header.defaultProps = {
  data: { back: false, title: 'Recipetly', search: false },
};
export default Header;
