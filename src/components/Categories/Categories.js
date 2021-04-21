import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { setRecipes } from '../../redux/actions/index';
import Recipe from '../Recipe/Recipe';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

const getDatas = (category, datas) => datas.filter((data) => data.strCategory === category);

const CategoriesComponent = ({ datas, setRecipes }) => {
  const { categoryName } = useParams();
  const [recipes, setRecipesLocal] = useState([]);
  const [filter, setFilter] = useState('ASC');

  const filterRecipes = (datas) => {
    if (filter !== 'ASC') {
      return datas.sort(
        (a, b) => (a.strMeal.toLowerCase() > b.strMeal.toLowerCase() ? -1 : 1),
      );
    }
    return datas.sort(
      (a, b) => (a.strMeal.toLowerCase() < b.strMeal.toLowerCase() ? -1 : 1),
    );
  };

  const getRecipes = () => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => {
        setRecipes(categoryName, response.data.meals);
        setRecipesLocal(filterRecipes(response.data.meals));
      })
      .catch(() => {
        toast.error('Oups! Something went wrong. Please try again later.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const init = async () => {
    const category = getDatas(categoryName, datas)[0];
    if (category && category.recipes) {
      setRecipesLocal(filterRecipes(category.recipes));
      return;
    }
    getRecipes();
  };

  const parseIngredients = (datas) => {
    const ingredients = [];

    datas.forEach((element) => {
      if (!ingredients[element.strIngredient]) {
        ingredients.push(element.strIngredient);
      }
    });
    console.log(ingredients);
  };

  const getIngredients = () => {
    Axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => {
        //
        parseIngredients(response.data.meals);
      })
      .catch(() => {
      });
  };

  useEffect(() => {
    init();
    getIngredients();
  }, []);

  useEffect(() => {
    init();
  }, [filter]);
  return (
    <div>
      <h1>Category</h1>
      <CategoryFilter setFilter={setFilter} filter={filter} />
      {recipes.map((data) => (
        <Recipe data={data} key={data.idMeal} />
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
