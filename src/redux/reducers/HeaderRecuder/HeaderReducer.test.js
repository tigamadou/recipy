// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeaderReducer from './HeaderReducer';
import * as types from '../../actions/types';

describe('Header Reducer', () => {
  it('should return the initial state', () => {
    expect(HeaderReducer({}, {})).toEqual({});
  });

  it('should handle SET_HEADER', () => {
    const header = { title: 'Recipely', back: '/' };
    expect(
      HeaderReducer([], {
        type: types.SET_HEADER,
        header,
      }),
    ).toEqual(header);
  });
});
