import {
  FETCH_NAV_ITEMS_REQUEST,
  FETCH_NAV_ITEMS_SUCCESS,
  FETCH_NAV_ITEMS_FAILURE,
} from "./Nav.types";

const initialState = {
  navItems: [],
  loading: false,
  error: "",
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAV_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NAV_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        navItems: action.payload,
      };
    case FETCH_NAV_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default navReducer;
