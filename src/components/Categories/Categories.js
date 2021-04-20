import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { setRecipes } from '../../redux/actions/index';
import Recipe from '../Recipe/Recipe';

const getDatas = (category, datas) => datas.filter((data) => data.strCategory === category);

const CategoriesComponent = ({ datas, setRecipes }) => {
  const { categoryName } = useParams();
  const [recipes, setRecipesLocal] = useState([]);

  const getRecipes = () => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => {
        // handle success
        setRecipes(categoryName, response.data.meals);
        setRecipesLocal(response.data.meals);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  useEffect(() => {
    const category = getDatas(categoryName, datas)[0];
    if (category && category.recipes) {
      setRecipesLocal(category.recipes);
      return;
    }
    getRecipes();
  }, []);

  return (
    <div>
      {recipes.map((data) => (
        <Recipe data={data} key={data.id} />
      ))}
    </div>
  );
};

CategoriesComponent.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  setRecipes: PropTypes.func,
};
CategoriesComponent.defaultProps = {
  datas: [],
  setRecipes: null,
};
const mapDispatchToProps = (dispatch) => ({
  setRecipes: (category, recipes) => dispatch(setRecipes(category, recipes)),
});

const mapStateToProps = (state) => ({
  datas: state.datas,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);
