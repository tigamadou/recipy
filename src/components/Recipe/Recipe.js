import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Fade from 'react-reveal/Zoom';

const Recipe = ({ data }) => (
  <Fade bottom>
    <div className="recipe">
      <img src={`${data.strMealThumb}/preview`} alt={data.strMeal} />
      <div>
        {data.strMeal}
      </div>
      <div>
        <Link to={`/recipe/${data.idMeal}`}> See Details </Link>
      </div>
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
