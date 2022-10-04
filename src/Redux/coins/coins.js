import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COINS = 'crypto-xe/coins/GET_COINS';

const initialState = {
  coins: [],
  loading: false,
  error: null,
};

const getCoins = createAsyncThunk(GET_COINS, async (args, { dispatch }) => {
  const response = await fetch('https://coinranking1.p.rapidapi.com/coins', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f6e02d2f6mshba9a19a6dd2a840p150e78jsn842e700d6d4b',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  });
  const data = await response.json();
  dispatch({
    type: GET_COINS,
    payload: data.data.coins,
  });
});

export { getCoins };

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coins: action.payload,
      };

    default:
      return state;
  }
}
