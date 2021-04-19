import React from 'react';
import { render, screen } from '@testing-library/react';
import Single from './Single';

describe('Single component tests', () => {
  test('renders single component ', () => {
    render(<Single />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Single')).toBeInTheDocument;
  });
});
