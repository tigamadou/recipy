import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Recipe from './Recipe';

const data = {
  strMealThumb: 'thumb',
  idMeal: '1',
  strMeal: 'Meal name',

};
describe('Recipe component tests', () => {
  test('renders Recipe component ', () => {
    render(<Router><Recipe data={data} /></Router>);
    expect(screen.getByText(data.strMeal)).toBeInTheDocument();
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Router><Recipe data={data} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
