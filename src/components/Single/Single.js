import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createRecipe, setHeader } from '../../redux/actions/index';

const getData = (id, recipes) => recipes.filter((data) => data.idMeal === id);

const Single = ({
  recipes, element, createRecipe, setHeader,
}) => {
  const [data, setData] = useState(element);
  const { id } = useParams();
  const ingredients = [];
  for (let i = 0; i < 20; i += 1) {
    ingredients.push(i);
  }
  const getRecipe = () => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setData(response.data.meals[0]);
        createRecipe(response.data.meals[0]);
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

  useEffect(() => {
    const data = getData(id, recipes)[0];
    if (data) {
      setData(data);
      return;
    }
    getRecipe();
  }, []);

  useEffect(() => {
    if (data) {
      setHeader({ title: data.strMeal, back: `/category/${data.strCategory}`, search: true });
    }
  }, [data]);
  return (
    <div className="container">
      {data
        && (
        <div>
          <img src={data.strMealThumb} alt={data.strMeal} />
          <h1>{data.strMeal}</h1>
          <div>{data.strArea}</div>
          <div>{data.strCategory}</div>
          <div>{data.strCategory}</div>
          <div>
            <h3>Ingredients</h3>
            <ul>
              { ingredients.map((e) => {
                if (data[`strIngredient${e + 1}`] !== '' && data[`strIngredient${e + 1}`] !== null) {
                  return <li key={e}>{ data[`strIngredient${e + 1}`] }</li>;
                }
                return <></>;
              })}
            </ul>
          </div>
          <div>
            <h3>Instruction</h3>
            <p>
              {data.strInstructions}
            </p>
          </div>
        </div>
        )}
    </div>
  );
};

Single.defaultProps = {
  element: null,
  recipes: null,
  createRecipe: null,
  setHeader: null,
};

Single.propTypes = {
  element: PropTypes.instanceOf(Object),
  recipes: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  createRecipe: PropTypes.func,
  setHeader: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  setHeader: (header) => dispatch(setHeader(header)),
});

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);
