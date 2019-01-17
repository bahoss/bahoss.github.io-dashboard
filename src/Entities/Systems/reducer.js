import {
  DATA_FETCH_SUCCEEDED,
  DATA_FETCH_START,
  DATA_PATCH_START,
  DATA_PATCH_SUCCEEDED,
  SET_BLOCK_POSITION
} from "./actions";

const initialState = {
  data: [],
  position: []
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

    case SET_BLOCK_POSITION:
      return {
        ...state,
        position: action.payload
      };

    default:
      return state;
  }
};
