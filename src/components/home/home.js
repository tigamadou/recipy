import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setDatas } from '../../redux/actions/index';
import Recipe from '../Recipe/Recipe';

const Home = ({ datas, setDatas }) => {
  useEffect(() => {
    Axios.get('https://themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        // handle success
        setDatas(response.data.meals);
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

Home.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  setDatas: PropTypes.func,
};
Home.defaultProps = {
  datas: [],
  setDatas: null,
};
const mapDispatchToProps = (dispatch) => ({
  setDatas: (datas) => dispatch(setDatas(datas)),
});
const mapStateToProps = (state) => ({
  datas: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
