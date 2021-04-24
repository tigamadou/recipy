import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { SetRecipes, SetHeader } from '../../redux/actions/index';
import Recipe from '../../components/Recipe/Recipe';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';

const getDatas = (category, datas) => datas.filter((data) => data.strCategory === category);

const CategoriesComponent = ({
  datas, SetRecipes, SetHeader,
}) => {
  const { categoryName } = useParams();
  const [recipes, SetRecipesLocal] = useState([]);
  const [filter, setFilter] = useState('');

  const filterRecipes = (datas) => datas.filter(
    (data) => data.strMeal.toLowerCase().indexOf(filter.toLowerCase()) > -1,
  );

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
      <CategoryFilter setFilter={setFilter} filter={filter} />
      <div className="container" data-testid="categories">
        <div className="cards">
          {(recipes && recipes.length > 0)
            ? (
              recipes.map((data) => (
                <Recipe data={data} key={data.idMeal} />
              ))
            )
            : (
              <div className="card no_result">
                No result found!
              </div>
            )}
        </div>
      </div>
    </>
  );
};

CategoriesComponent.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  SetRecipes: PropTypes.func,
  SetHeader: PropTypes.func,
};
CategoriesComponent.defaultProps = {
  datas: [],
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
