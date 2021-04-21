import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { setDatas, setHeader } from '../../redux/actions/index';
import Category from '../Category/Category';

const Home = ({ datas, setDatas, setHeader }) => {
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
    setHeader({ title: 'Recipetly' });
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
  setHeader: PropTypes.func,
};
Home.defaultProps = {
  datas: [],
  setDatas: null,
  setHeader: null,
};
const mapDispatchToProps = (dispatch) => ({
  setDatas: (datas) => dispatch(setDatas(datas)),
  setHeader: (header) => dispatch(setHeader(header)),
});
const mapStateToProps = (state) => ({
  datas: state.datas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
