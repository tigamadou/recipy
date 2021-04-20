import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryFilter from './CategoryFilter';

describe('CategoryFilter component tests', () => {
  test('renders CategoryFilter component ', () => {
    render(<CategoryFilter />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Filtrer by')).toBeInTheDocument;
  });
});
