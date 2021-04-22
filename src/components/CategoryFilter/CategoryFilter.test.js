import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CategoryFilter from './CategoryFilter';

describe('CategoryFilter component tests', () => {
  const setFilter = jest.fn();
  test('renders CategoryFilter component ', () => {
    render(<CategoryFilter filter="Beef" setFilter={setFilter} />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByPlaceholderText('Type the recipe name')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<CategoryFilter filter="Beef" setFilter={setFilter} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
