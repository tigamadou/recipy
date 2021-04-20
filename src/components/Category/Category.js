import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Category = ({ category }) => (

  <Fade bottom>
    <div>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <h3>{category.strCategory}</h3>
      <p>
        {category.strCategoryDescription}
      </p>
    </div>
    <div>
      <Link to={`/category/${category.strCategory}`}> See Details </Link>
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
