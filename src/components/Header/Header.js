import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Color from '../../styles/modules/Colors.module.scss';
import Font from '../../styles/modules/Font.module.scss';
import Background from '../../styles/modules/Background.module.scss';

const Header = ({ data }) => (

  <header className={`header ${Background.dark}`}>
    {data.back
          && (
            <Link to={data.back} className={`nav ${Color.white} ${Font.is_md}`}>
              <FiArrowLeft />
            </Link>
          )}
    <div className={`title ${Color.white} ${Font.is_sm}`}><h1>{data.title}</h1></div>
  </header>

);

Header.propTypes = {
  data: PropTypes.instanceOf(Object),
};
Header.defaultProps = {
  data: { back: false, title: 'Recipely', search: false },
};
export default Header;
