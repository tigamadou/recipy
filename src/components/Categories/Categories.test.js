import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Categories from './Categories';

describe('Categories component tests', () => {
  test('renders Categories component ', () => {
    render(<Categories />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Category')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Categories />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
