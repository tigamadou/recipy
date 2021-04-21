import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { setRecipes, setHeader } from '../../redux/actions/index';
import Recipe from '../Recipe/Recipe';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

const getDatas = (category, datas) => datas.filter((data) => data.strCategory === category);

const CategoriesComponent = ({
  datas, ingredients, setRecipes, setHeader,
}) => {
  const { categoryName } = useParams();
  const [recipes, setRecipesLocal] = useState([]);
  const [filter, setFilter] = useState('');

  // eslint-disable-next-line max-len
  const filterRecipes = (datas) => datas.filter((data) => data.strMeal.toLowerCase().indexOf(filter.toLowerCase()) > -1);

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

  useEffect(() => {
    setHeader({ title: `${categoryName}`, back: '/', search: true });
    init();
  }, [filter]);

  return (
    <div className="container">
      <h1>Category</h1>
      <CategoryFilter setFilter={setFilter} filter={filter} ingredients={ingredients} />
      {recipes.map((data) => (
        <Recipe data={data} key={data.idMeal} />
      ))}
    </div>
  );
};

CategoriesComponent.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  ingredients: PropTypes.instanceOf(Array),
  setRecipes: PropTypes.func,
  setHeader: PropTypes.func,
};
CategoriesComponent.defaultProps = {
  datas: [],
  ingredients: [],
  setRecipes: null,
  setHeader: null,
};
const mapDispatchToProps = (dispatch) => ({
  setRecipes: (category, recipes) => dispatch(setRecipes(category, recipes)),
  setHeader: (header) => dispatch(setHeader(header)),
});

const mapStateToProps = (state) => ({
  datas: state.datas,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);
