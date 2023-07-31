import axios from 'axios';

const domain = window.location.origin;

axios.defaults.baseURL = domain;

const request = axios.create({
  baseURL: `${domain}/v1`,
  transformResponse: [(response) => {
    if (response) {
      return JSON.parse(response).data;
    }
    return null;
  }],
});

export default request;
