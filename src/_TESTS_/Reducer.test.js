import coinReducer, { getCoins } from '../Redux/coins/coins';

describe('reducer', () => {
  it('should handle initial state', () => {
    expect(coinReducer(undefined, {})).toEqual({
      coins: [],
      loading: false,
      error: null,
    });
  });

  it('should handle GET_COINS', () => {
    expect(
      coinReducer([], {
        type: getCoins.type,
        payload: [{ id: 1, name: 'Bitcoin' }],
      }),
    ).toEqual({
      coins: [{ id: 1, name: 'Bitcoin' }],
    });
  });

  it('should return inital state when an unknown action is received', () => {
    expect(coinReducer(undefined, { type: 'unknown' })).toEqual({
      coins: [],
      loading: false,
      error: null,
    });
  });
});
