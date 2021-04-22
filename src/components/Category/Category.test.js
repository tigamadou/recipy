import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Category from './Category';

describe('Category component tests', () => {
  const data = {
    strCategoryThumb: 'thumb',
    strCategory: 'testCategory',

  };
  test('renders Category component ', () => {
    render(<Router><Category category={data} /></Router>);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('testCategory')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Router><Category category={data} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
