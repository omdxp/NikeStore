import {createStore} from 'redux';
import addToCartReducer from '../reducers/add-to-cart-reducer';

const store = createStore(addToCartReducer);

export default store;
