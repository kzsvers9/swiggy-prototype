import { createSelector } from "reselect";

export const cartSelector = (state) => state.cart.cart;

export const cartItemsSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((acc, cur) => {
    if (!acc[cur.name]) {
      acc[cur.name] = {
        ...cur,
        quantity: 1,
      };
    } else {
      acc[cur.name].quantity++;
    }
    return acc;
  }, {})
);

export const cartTotalPriceSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    Object.values(cartItems)
      .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
      .toFixed(2)
);

export const cartIsEmptySelector = createSelector(
  [cartSelector],
  (cart) => cart.length === 0
);
