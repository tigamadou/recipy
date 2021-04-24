import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header component tests', () => {
  const data = { title: 'Recipy', back: false };
  test('renders Header component ', () => {
    render(<Header data={data} />);
    expect(screen.getByText('Recipy')).toBeInTheDocument();
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Header data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
