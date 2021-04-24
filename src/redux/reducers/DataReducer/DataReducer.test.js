import DataReducer from './DataReducer';
import * as types from '../../actions/types';

describe('Data Reducer', () => {
  it('should return the initial state', () => {
    expect(DataReducer([], {})).toEqual([]);
  });

  it('should handle SET_DATAS', () => {
    expect(
      DataReducer([], {
        type: types.SET_DATAS,
        datas: [{ name: 'data one' }],
      }),
    ).toEqual([
      { name: 'data one' },
    ]);
  });

  it('should handle SET_RECIPES', () => {
    const datas = [{ strCategory: 'categoryName' }];
    const recipes = [{ name: 'myRecipe' }];
    const result = [{ strCategory: 'categoryName', recipes: [{ name: 'myRecipe' }] }];
    expect(
      DataReducer(datas, {
        type: types.SET_RECIPES,
        category: 'categoryName',
        recipes,
      }),
    ).toEqual(result);
  });
});
