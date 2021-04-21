import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter, setFilter }) => (
  <div>
    <input onChange={(e) => setFilter(e.target.value)} value={filter} placeholder="Type your search here" />
  </div>
);

CategoryFilter.defaultProps = {
  setFilter: null,
  filter: '',
};

CategoryFilter.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default CategoryFilter;
