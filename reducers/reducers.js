import { ADD_ORDER } from './actions';

// Estado inicial
const initialState = {
  orders: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
