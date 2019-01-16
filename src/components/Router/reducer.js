import { DATA_FETCH_SUCCEEDED, DATA_FETCH_START,DATA_PATCH_START,DATA_PATCH_SUCCEEDED  } from "./actions";

const initialState = {
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCH_START:
      return {
        ...state,
        data: []
      };

    case DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        data: action.data
      };

     case DATA_PATCH_START:
     return {
       ...state
     };

     case DATA_PATCH_SUCCEEDED:
     return {
       ...state
     };

    default:
      return state;
  }
};
