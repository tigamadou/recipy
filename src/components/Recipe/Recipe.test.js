import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Recipe from './Recipe';

describe('Recipe component tests', () => {
  test('renders Recipe component ', () => {
    render(<Recipe />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('See Details ')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Recipe />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
