import {ADD_TO_CART} from '../constants';

// Reducer
const initialState = {cardItems: []};

function addToCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      state.cardItems.push(action.payload);
      return {
        cardItems: state.cardItems,
      };
    default:
      return state;
  }
}

export default addToCartReducer;
