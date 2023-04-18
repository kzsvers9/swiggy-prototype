import {
  FETCH_LIST_ITEMS_REQUEST,
  FETCH_LIST_ITEMS_SUCCESS,
  FETCH_LIST_ITEMS_FAILURE,
} from "./List.types";

const initialState = {
  listItems: [],
  loading: false,
  error: "",
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        listItems: action.payload,
      };
    case FETCH_LIST_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
