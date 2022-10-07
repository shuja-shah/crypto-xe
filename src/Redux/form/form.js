const SELECT_CATEGORY = 'crypto-xe/form/SELECT_CATEGORY';

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

const initialState = {
  category: 'all',
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
