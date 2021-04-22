import SetHeader from './SetHeader';
import * as types from '../types';

describe('action SetHeader', () => {
  it('should create an action to set the header', () => {
    const header = { title: 'Recipely' };
    const expectedAction = {
      type: types.SET_HEADER,
      header,
    };
    expect(SetHeader(header)).toEqual(expectedAction);
  });
});
