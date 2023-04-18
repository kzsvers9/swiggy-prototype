import { combineReducers } from "redux";
import cartReducer from "./Cart/Cart.reducer";
import foodReducer from "./Fooditems/Food.reducer";
import navReducer from "./NavItems/Nav.reducer";
import listReducer from "./listItems/List.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  food: foodReducer,
  nav: navReducer,
  list: listReducer,
});

export default rootReducer;
