import {
  FETCH_FOOD_ITEMS_REQUEST,
  FETCH_FOOD_ITEMS_SUCCESS,
  FETCH_FOOD_ITEMS_FAILURE,
} from "./Food.types";

const initialState = {
  foodItems: [],
  loading: false,
  error: "",
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FOOD_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        foodItems: action.payload,
      };
    case FETCH_FOOD_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default foodReducer;
