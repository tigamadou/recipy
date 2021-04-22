import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header component tests', () => {
  const data = { title: 'Recipely', back: false };
  test('renders Header component ', () => {
    render(<Header data={data} />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Recipely')).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Header data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
