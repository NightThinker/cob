import * as types from '../constants/ActionTypes'

const initialState = {
  carts: [],
};

const reducerAudience = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log('action.product', action.product)
      return {
        ...state,
        carts: [...state.carts, action.product],
      };
    // return state;
    default:
      return state;
  }
};

export default reducerAudience;