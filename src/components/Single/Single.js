import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { FiCheckSquare } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { createRecipe, setHeader } from '../../redux/actions/index';
import Color from '../../styles/modules/Colors.module.scss';
import Font from '../../styles/modules/Font.module.scss';

const getData = (id, recipes) => recipes.filter((data) => data.idMeal === id);

const Single = ({
  recipes, element, createRecipe, setHeader,
}) => {
  const [data, setData] = useState(element);
  const { id } = useParams();
  const ingredients = [];
  const { path, url } = useRouteMatch();
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
      setHeader({ title: data.strCategory, back: `/category/${data.strCategory}` });
    }
  }, [data]);
  return (
    <div className="container">
      {data
        && (
          <Fade>
            <div className="single">

              <div className="tabs">
                <NavLink className={`${Color.white} ${Font.is_sm}`} to={`${url}/`}>Preview</NavLink>
                <NavLink className={`${Color.white} ${Font.is_sm}`} to={`${url}/ingerdients/`}>Ingredients</NavLink>
                <NavLink className={`${Color.white} ${Font.is_sm}`} to={`${url}/preparation/`}>Preparation</NavLink>
              </div>
              <div className="details" style={{ backgroundImage: `url(${data.strMealThumb})` }}>

                <Switch>
                  <Route path={`${path}/ingerdients`}>
                    <Fade bottom>
                      <div className="content_">
                        <div className="info">
                          <h3 className={`${Color.primary} ${Font.is_lg} title_`}>Ingredients</h3>
                          <ul className="ingredients">
                            {ingredients.map((e) => {
                              if (data[`strIngredient${e + 1}`] !== '' && data[`strIngredient${e + 1}`] !== null) {
                                return (
                                  <li key={e}>
                                    <FiCheckSquare className={`${Color.primary} ${Font.is_xl} icon`} />
                                    <span className={`${Font.is_lg}`}>
                                      {data[`strIngredient${e + 1}`]}
                                      {' '}
                                      {data[`strMeasure${e + 1}`]}
                                    </span>
                                  </li>
                                );
                              }
                              return <></>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </Fade>
                  </Route>
                  <Route path={`${path}/preparation`}>
                    <Fade bottom>
                      <div className="content_">
                        <div className="info">
                          <h3 className={`${Color.primary} ${Font.is_xl} title_`}>Preparation</h3>
                          <p className="text">
                            {data.strInstructions}
                          </p>

                        </div>
                      </div>
                    </Fade>
                  </Route>
                  <Route exact path={path}>
                    <Fade bottom>
                      <div className="preview">
                        <div className="overlay_">
                          <h1 className={`${Color.white} ${Font.is_default}`}>{data.strMeal}</h1>
                          <div className={`${Color.primary}`}>{data.strArea}</div>
                        </div>
                      </div>
                    </Fade>
                  </Route>
                </Switch>
              </div>
            </div>
          </Fade>
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
