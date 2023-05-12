import { createStore, combineReducers } from 'redux';
import ordersReducer from './reducers/ordersReducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
});

const store = createStore(rootReducer);

export default store;
