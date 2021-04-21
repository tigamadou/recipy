import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { setDatas } from '../../redux/actions/index';
import Category from '../Category/Category';

const Home = ({ datas, setDatas }) => {
  const categories = () => {
    Axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        setDatas(response.data.categories);
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
    if (datas.length < 1) {
      categories();
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="cards">

          {datas.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </div>
      </div>
    </>
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
  datas: state.datas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
