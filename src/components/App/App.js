import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppRouter from '../../routers/AppRouter';
import Header from '../Header/Header';

const App = ({ header }) => (
  <div className="app">
    <Header data={header} />
    <div className="wrapper">
      <AppRouter />
    </div>
  </div>
);
App.propTypes = {
  header: PropTypes.instanceOf(Object),
};
App.defaultProps = {
  header: null,
};

const mapStateToProps = (state) => {
  console.log(state.header);
  return {
    header: state.header,
  };
};

export default connect(mapStateToProps, null)(App);
