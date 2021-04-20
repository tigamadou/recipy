import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createRecipe } from '../../redux/actions/index';

const getData = (id, recipes) => recipes.filter((data) => data.idMeal === id);

const Single = ({ recipes, element, createRecipe }) => {
  const [data, setData] = useState(element);
  const { id } = useParams();
  const getRecipe = () => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        // handle success
        setData(response.data.meals[0]);
        createRecipe(response.data.meals[0]);
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
    const data = getData(id, recipes)[0];
    if (data) {
      setData(data);
      return;
    }
    getRecipe();
  }, []);
  return (
    <div>
      {data
        && (
        <div>
          <img src={data.strMealThumb} alt={data.strMeal} />
          {data.strMeal}
        </div>
        )}
    </div>
  );
};

Single.defaultProps = {
  element: null,
  recipes: null,
  createRecipe: null,
};

Single.propTypes = {
  element: PropTypes.instanceOf(Object),
  recipes: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  createRecipe: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
});

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);
