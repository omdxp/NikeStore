import {ADD_TO_CART} from '../constants';

// Reducer
const initialState = {cardItems: []};

function addToCartReducer(state = initialState, action) {
  var alreadyExists = false;
  switch (action.type) {
    case ADD_TO_CART:
      state.cardItems.forEach((item) => {
        console.log('this is item');
        console.log(item);
        console.log('this is action');
        console.log(action.payload);
        if (action.payload.dataa === item.dataa) {
          alreadyExists = true;
        } else {
          alreadyExists = false;
        }
      });
      if (!alreadyExists) {
        state.cardItems.push(action.payload);
      }
      return {
        cardItems: state.cardItems,
      };

    default:
      return state;
  }
}

export default addToCartReducer;
