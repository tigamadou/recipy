import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setRecipes } from '../../redux/actions/index';
import Recipe from '../Recipe/Recipe';

const CategoriesComponent = ({ category, datas, setRecipes }) => {
  useEffect(() => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
      .then((response) => {
        // handle success
        setRecipes(response.data.meals);
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, []);
  return (
    <div>
      {datas.map((data) => (
        <Recipe data={data} key={data.id} />
      ))}
    </div>
  );
};

CategoriesComponent.propTypes = {
  category: PropTypes.instanceOf(Object),
  datas: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  setRecipes: PropTypes.func,
};
CategoriesComponent.defaultProps = {
  category: null,
  datas: [],
  setRecipes: null,
};
const mapDispatchToProps = (dispatch) => ({
  setRecipes: (category, recipes) => dispatch(setRecipes(category, recipes)),
});

const getDatas = (category, datas) => datas.filter((data) => data.id === category.id);
const mapStateToProps = (state) => ({
  category: state.category,
  datas: getDatas(state.category, state.datas),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);
