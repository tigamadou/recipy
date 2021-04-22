import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import storeReducer from '../../redux/store';

import Home from './Home';

const store = storeReducer();
describe('Home component tests', () => {
  test('renders home component ', () => {
    render(
      <Provider store={store}>
        <Home />
        {' '}
      </Provider>,
    );
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByTestId('home')).toBeInTheDocument;
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
