import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Color from '../../styles/modules/Colors.module.scss';
import Card from '../../styles/modules/Card.module.scss';
import Font from '../../styles/modules/Font.module.scss';

const Category = ({ category }) => (

  <Fade>
    <div className={`card ${Card.withOverlay}`} style={{ backgroundImage: `url(${category.strCategoryThumb})` }}>
      <Link to={`/category/${category.strCategory}`}>
        <div className="content">
          <div className="overlay">
            <div>
              <h2 className={`title ${Color.white} ${Font.is_xl}`}>{category.strCategory}</h2>
            </div>
            <div className="description">
              <p className={`${Font.is_sm}`}>
                Find all our
                {category.strCategory}
                {' '}
                recipes.
              </p>
            </div>

          </div>
        </div>
      </Link>
    </div>
  </Fade>
);

Category.defaultProps = {
  category: null,
};

Category.propTypes = {
  category: PropTypes.instanceOf(Object),
};
export default Category;
