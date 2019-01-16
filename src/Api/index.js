const API_URL = 'https://novaweb.studio/dashboard/_api/projects/';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

function fetchGET(url) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  return request(url, options);
}
const Api = {
  getAll: () => {
    const url = `${API_URL}`;
    return fetchGET(url);
  },

  };

export default Api;
