import {createStore, combineReducers} from 'redux';
import addToCartReducer from '../reducers/add-to-cart-reducer';
import {persistReducer, persistStore} from 'redux-persist';
import FileSystemStorage from 'redux-persist-filesystem-storage';

const appReducers = combineReducers({addToCartReducer});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: FileSystemStorage,
  whitelist: ['addToCartReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistedStore = persistStore(store);

export default store;
