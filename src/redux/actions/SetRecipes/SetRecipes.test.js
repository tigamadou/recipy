import SetRecipes from './SetRecipes';
import * as types from '../types';

describe('action SetRecipes', () => {
  it('should create an action to set the Recipes in the category', () => {
    const category = 'Beef';
    const recipes = [{ name: 'recipe one' }];
    const expectedAction = {
      type: types.SET_RECIPES,
      category,
      recipes,
    };
    expect(SetRecipes(category, recipes)).toEqual(expectedAction);
  });
});
