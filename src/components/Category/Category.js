import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const Category = ({ data }) => (
  <div>
    <div>
      <img src={data.strCategoryThumb} alt={data.strCategory} />
      {data.strCategory}
    </div>
    <div>
      <Link to={`/category/${data.strCategory}`}> Details </Link>
    </div>
  </div>
);

Category.defaultProps = {
  data: null,
};

Category.propTypes = {
  data: PropTypes.instanceOf(Object),
};
export default Category;
