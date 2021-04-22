import CreateRecipe from './CreateRecipe';
import * as types from '../types';

describe('action CreateRecipe', () => {
  it('should create an action to add a recipe', () => {
    const recipe = { name: 'my recipe' };
    const expectedAction = {
      type: types.CREATE_RECIPE,
      recipe,
    };
    expect(CreateRecipe(recipe)).toEqual(expectedAction);
  });
});
