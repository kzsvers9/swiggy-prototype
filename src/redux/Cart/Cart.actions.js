import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
} from "./Cart.types";

export const addToCart = (food) => {
  return {
    type: ADD_TO_CART,
    payload: food,
  };
};

export const removeFromCart = (food) => {
  return {
    type: REMOVE_FROM_CART,
    payload: food,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeItemFromCart = (itemToRemove) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: itemToRemove,
  };
};
