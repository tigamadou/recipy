// eslint-disable-next-line no-unused-vars
import React from 'react';
import RecipeReducer from './RecipeReducer';
import * as types from '../../actions/types';

describe('Recipe Reducer', () => {
  it('should return the initial state', () => {
    expect(RecipeReducer({}, {})).toEqual({});
  });

  it('should handle CREATE_RECIPE', () => {
    const recipe = { name: 'recipe one' };
    expect(
      RecipeReducer([], {
        type: types.CREATE_RECIPE,
        recipe,
      }),
    ).toEqual([recipe]);
  });
});
