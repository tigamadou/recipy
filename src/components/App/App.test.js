import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render, screen } from './test-utils';
import App from './App';

describe('App connected component', () => {
  it('should render with given state from Redux store', () => {
    render(<Router><App /></Router>, { initialState: { header: { title: 'Recipely', back: false } } });
    expect(screen.getByText('Recipely')).toBeInTheDocument();
  });
});
