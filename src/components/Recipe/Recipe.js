import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Color from '../../styles/modules/Colors.module.scss';
import Font from '../../styles/modules/Font.module.scss';
import Card from '../../styles/modules/Card.module.scss';

const Recipe = ({ data }) => (
  <Fade>
    <div className={`card ${Card.withOverlay}`} style={{ backgroundImage: `url(${data.strMealThumb})` }}>
      <Link to={`/recipe/${data.idMeal}`}>
        <div className="content">
          <div className="overlay">
            <div>
              <h2 className={`title ${Color.white} ${Font.is_xl}`}>{data.strMeal}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </Fade>
);

Recipe.defaultProps = {
  data: null,
};

Recipe.propTypes = {
  data: PropTypes.instanceOf(Object),
};
export default Recipe;
