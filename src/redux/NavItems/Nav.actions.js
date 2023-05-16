import {
  FETCH_NAV_ITEMS_REQUEST,
  FETCH_NAV_ITEMS_SUCCESS,
  FETCH_NAV_ITEMS_FAILURE,
} from "./Nav.types";

export const fetchNavItemsRequest = () => ({
  type: FETCH_NAV_ITEMS_REQUEST,
});

export const fetchNavItemsSuccess = (navItems) => ({
  type: FETCH_NAV_ITEMS_SUCCESS,
  payload: navItems,
});

export const fetchNavItemsFailure = (error) => ({
  type: FETCH_NAV_ITEMS_FAILURE,
  payload: error,
});

export const fetchNavItems = () => {
  return (dispatch) => {
    dispatch(fetchNavItemsRequest());
    fetch("navbar.json")
  
      .then((response) =>
      // console.log(response)
       response.json())
    
      .then((data) => {
        console.log(data)
        dispatch(fetchNavItemsSuccess(data));

      })
      .catch((error) => {
        dispatch(fetchNavItemsFailure(error.message));
      });
  };
};
