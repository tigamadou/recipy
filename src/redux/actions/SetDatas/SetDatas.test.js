import SetDatas from './SetDatas';
import * as types from '../types';

describe('action SetDatas', () => {
  it('should create an action to set the datas', () => {
    const datas = [{ name: 'my recipe' }, { name: 'my recipe 2' }];
    const expectedAction = {
      type: types.SET_DATAS,
      datas,
    };
    expect(SetDatas(datas)).toEqual(expectedAction);
  });
});
