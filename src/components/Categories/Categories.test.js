import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from './test-utils';
import Categories from './Categories';

describe('Categories component tests', () => {
  test('renders Categories component ', () => {
    render(<Categories />, {
      initialState: [{
        idCategory: '1', strCategory: 'Beef', strCategoryDescription: 'description', strCategoryThumb: 'thumb',
      }],
    });
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
