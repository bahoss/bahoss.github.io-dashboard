export const DATA_FETCH_SUCCEEDED = "DATA_FETCH_SUCCEEDED";
export const DATA_FETCH_START = "DATA_FETCH_START";
export const DATA_PATCH_START = "DATA_PATCH_START";
export const DATA_PATCH_SUCCEEDED = "DATA_PATCH_SUCCEEDED";
export const SET_BLOCK_POSITION = "SET_BLOCK_POSITION";

export const getData = payload => ({
  type: DATA_FETCH_START
});

export const addComment = payload => ({
  type: DATA_PATCH_START,
  payload
});

export const setPosition = payload => ({
  type: SET_BLOCK_POSITION,
  payload
});
