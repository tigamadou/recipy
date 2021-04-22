import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { SetRecipes, SetHeader } from '../../redux/actions/index';
import Recipe from '../Recipe/Recipe';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

const getDatas = (category, datas) => datas.filter((data) => data.strCategory === category);

const CategoriesComponent = ({
  datas, ingredients, SetRecipes, SetHeader,
}) => {
  const { categoryName } = useParams();
  const [recipes, SetRecipesLocal] = useState([]);
  const [filter, setFilter] = useState('');

  // eslint-disable-next-line max-len
  const filterRecipes = (datas) => datas.filter((data) => data.strMeal.toLowerCase().indexOf(filter.toLowerCase()) > -1);

  const getRecipes = () => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => {
        SetRecipes(categoryName, response.data.meals);
        SetRecipesLocal(filterRecipes(response.data.meals));
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
      SetRecipesLocal(filterRecipes(category.recipes));
      return;
    }
    getRecipes();
  };

  useEffect(() => {
    SetHeader({ title: `${categoryName}`, back: '/' });
    init();
  }, [filter]);

  return (
    <>
      <CategoryFilter setFilter={setFilter} filter={filter} ingredients={ingredients} />
      <div className="container">
        <div className="cards">
          {recipes.map((data) => (
            <Recipe data={data} key={data.idMeal} />
          ))}
        </div>
      </div>
    </>
  );
};

CategoriesComponent.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  ingredients: PropTypes.instanceOf(Array),
  SetRecipes: PropTypes.func,
  SetHeader: PropTypes.func,
};
CategoriesComponent.defaultProps = {
  datas: [],
  ingredients: [],
  SetRecipes: null,
  SetHeader: null,
};
const mapDispatchToProps = (dispatch) => ({
  SetRecipes: (category, recipes) => dispatch(SetRecipes(category, recipes)),
  SetHeader: (header) => dispatch(SetHeader(header)),
});

const mapStateToProps = (state) => ({
  datas: state.datas,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);
