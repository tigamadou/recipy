import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import storeReducer from '../../redux/store';
import Home from './HomeComponent';

const store = storeReducer();
describe('Home component tests', () => {
  test('renders home component ', () => {
    render(
      <Provider store={store}>
        <Home />
        {' '}
      </Provider>,
    );
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
          {' '}
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
