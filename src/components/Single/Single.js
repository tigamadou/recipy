import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const Single = ({ element }) => {
  const [data, setData] = useState(element);
  const { id } = useParams();
  useEffect(() => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        // handle success
        setData(response.data.meals[0]);
        console.log(response.data);
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
    <div>{data && data.strMeal}</div>
  );
};

Single.defaultProps = {
  element: null,
};

Single.propTypes = {
  element: PropTypes.instanceOf(Object),
};
export default Single;
