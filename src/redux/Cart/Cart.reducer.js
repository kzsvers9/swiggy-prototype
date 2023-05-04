import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, REMOVE_ITEM_FROM_CART } from './Cart.types';

const INITIAL_STATE = {
  cart: [],
};


const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      const indexToRemove = state.cart.findIndex((item) => item.name === action.payload.name);
      if (indexToRemove !== -1) {
        const updatedCart = [...state.cart];
        updatedCart.splice(indexToRemove, 1);
        return { ...state, cart: updatedCart };
      }
      return state;

    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE_ITEM_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.name !== action.payload.name)
        };
  

    default:
      return state;
  }
};

export default cartReducer;

