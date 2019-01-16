import { DATA_FETCH_SUCCEEDED } from "./actions";

const initialState = {
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
};
