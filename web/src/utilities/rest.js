import querystring from 'query-string';
import axios from 'axios';

// axios.defaults.baseURL = '/api/v1/';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default axios.create({
  baseURL: '/api/v1/',
  // timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
  paramsSerializer: function(params) {
    return querystring.stringify(params, { arrayFormat: 'brackets' });
  }
});
