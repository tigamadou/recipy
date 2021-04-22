import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { SetDatas, SetHeader } from '../../redux/actions/index';
import Category from '../Category/Category';

const Home = ({ datas, SetDatas, SetHeader }) => {
  const categories = () => {
    Axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        SetDatas(response.data.categories);
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
    SetHeader({ title: 'Recipely' });
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
  SetDatas: PropTypes.func,
  SetHeader: PropTypes.func,
};
Home.defaultProps = {
  datas: [],
  SetDatas: null,
  SetHeader: null,
};
const mapDispatchToProps = (dispatch) => ({
  SetDatas: (datas) => dispatch(SetDatas(datas)),
  SetHeader: (header) => dispatch(SetHeader(header)),
});
const mapStateToProps = (state) => ({
  datas: state.datas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
