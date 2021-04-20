import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const Recipe = ({ data }) => (
  <div>
    <div>
      {data.strMeal}
    </div>
    <div>
      <Link to={`/recipe/${data.idMeal}`}> Details </Link>
    </div>
  </div>
);

Recipe.defaultProps = {
  data: null,
};

Recipe.propTypes = {
  data: PropTypes.instanceOf(Object),
};
export default Recipe;
