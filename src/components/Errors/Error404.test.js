import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Error404 from './Error404';

describe('Error404 component tests', () => {
  test('renders Error404 component ', () => {
    render(<Error404 />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Error404 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
