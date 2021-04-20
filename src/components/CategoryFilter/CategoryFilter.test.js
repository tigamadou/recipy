import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CategoryFilter from './CategoryFilter';

describe('CategoryFilter component tests', () => {
  test('renders CategoryFilter component ', () => {
    render(<CategoryFilter />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Filtrer by')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<CategoryFilter />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
