import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter, setFilter }) => (
  <div>
    <p>Filtrer by</p>
    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
      <option>ASC</option>
      <option>DESC</option>
    </select>
  </div>
);

CategoryFilter.defaultProps = {
  setFilter: null,
  filter: 'ASC',
};

CategoryFilter.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default CategoryFilter;
