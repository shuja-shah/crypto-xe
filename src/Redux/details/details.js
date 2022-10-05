const Details = 'crypto-xe/details/Details';

export const sendDetails = (payload) => ({
  type: Details,
  payload,
});

const tempState = {
  details: [],
  loading: false,
  error: null,
};

export default function detailsReducer(state = tempState, action) {
  switch (action.type) {
    case Details:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
}
