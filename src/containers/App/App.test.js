import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import App from './App';
import storeReducer from '../../redux/store';

const store = storeReducer();

describe('App connected component', () => {
  test('renders App component ', () => {
    render(<Provider store={store}><Router><App /></Router></Provider>);
    expect(screen.getByText('Recipy')).toBeInTheDocument();
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Provider store={store}><Router><App /></Router></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
