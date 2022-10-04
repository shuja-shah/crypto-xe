const GET_COINS = 'crypto-xe/coins/GET_COINS';

const initialState = {
    coins: [],
    loading: false,
    error: null
};

const getCoins = () => {
    return {
        type: GET_COINS
    };
}
export { getCoins };

export default function coinReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COINS:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

