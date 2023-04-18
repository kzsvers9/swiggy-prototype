import {
  FETCH_LIST_ITEMS_REQUEST,
  FETCH_LIST_ITEMS_SUCCESS,
  FETCH_LIST_ITEMS_FAILURE,
} from "./List.types";

export const fetchListItemsRequest = () => ({
  type: FETCH_LIST_ITEMS_REQUEST,
});

export const fetchListItemsSuccess = (listItems) => ({
  type: FETCH_LIST_ITEMS_SUCCESS,
  payload: listItems,
});

export const fetchListItemsFailure = (error) => ({
  type: FETCH_LIST_ITEMS_FAILURE,
  payload: error,
});

export const fetchListItems = () => {
  return (dispatch) => {
    dispatch(fetchListItemsRequest());
    fetch("mainlist.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchListItemsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListItemsFailure(error.message));
      });
  };
};
