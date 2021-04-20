import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from './Category';

describe('Category component tests', () => {
  test('renders Category component ', () => {
    render(<Category />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('See Details')).toBeInTheDocument;
  });
});
