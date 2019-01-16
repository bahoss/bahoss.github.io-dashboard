export const DATA_FETCH_SUCCEEDED = "DATA_FETCH_SUCCEEDED";

export const getData = payload => ({
  type: DATA_FETCH_SUCCEEDED,
  payload
});
