import React from 'react';
import {
  MemoryRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Categories from './Categories';
import storeReducer from '../../redux/store';

const store = storeReducer();

describe('Categories component tests', () => {
  it('renders Categories component ', () => {
    render(<Provider store={store}><Router><Route><Categories /></Route></Router></Provider>);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByTestId('categories')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Provider store={store}><Router><Route><Categories /></Route></Router></Provider>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
