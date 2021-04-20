import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const Category = ({ category }) => (
  <div>
    <div>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <h3>{category.strCategory}</h3>
      <p>
        {category.strCategoryDescription}
      </p>
    </div>
    <div>
      <Link to={`/category/${category.strCategory}`}> Details </Link>
    </div>
  </div>
);

Category.defaultProps = {
  category: null,
};

Category.propTypes = {
  category: PropTypes.instanceOf(Object),
};
export default Category;
