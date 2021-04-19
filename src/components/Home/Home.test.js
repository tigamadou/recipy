import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component tests', () => {
  test('renders home component ', () => {
    render(<Home />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Home')).toBeInTheDocument;
  });
});
