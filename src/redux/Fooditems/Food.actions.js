import {
  FETCH_FOOD_ITEMS_REQUEST,
  FETCH_FOOD_ITEMS_SUCCESS,
  FETCH_FOOD_ITEMS_FAILURE,
} from "./Food.types";

export const fetchFoodItemsRequest = () => ({
  type: FETCH_FOOD_ITEMS_REQUEST,
});

export const fetchFoodItemsSuccess = (foodItems) => ({
  type: FETCH_FOOD_ITEMS_SUCCESS,
  payload: foodItems,
});

export const fetchFoodItemsFailure = (error) => ({
  type: FETCH_FOOD_ITEMS_FAILURE,
  payload: error,
});

export const fetchFoodItems = () => {
  return (dispatch) => {
    dispatch(fetchFoodItemsRequest());
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchFoodItemsSuccess(data.items));
      })
      .catch((error) => {
        dispatch(fetchFoodItemsFailure(error.message));
      });
  };
};
