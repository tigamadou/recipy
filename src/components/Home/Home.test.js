import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home component tests', () => {
  test('renders home component ', () => {
    render(<Home />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Recipetly')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
