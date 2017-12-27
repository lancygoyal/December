/*
 * @description: Get places array for the application 
 * */

import querystring from 'query-string';
import axios from 'axios';

let config = {
  headers: { 'Content-Type': 'application/json' }
};

export default class RestClient {
  static post(url, params, token = '', userId = '') {
    return axios.post(
        `/api/v1/${url}`,
        params,
        config
      );

   }

  static put(url, params, token = '', userId = '') {
    config.headers.token = token;
    config.headers.auth = userId;

    return new Promise(function(fulfill, reject) {
      axios
        .put('/api/v1/' + url, JSON.stringify(params), config)
        .then(function(response) {
          fulfill(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }

  static delete(url, params, token, userId = '') {
    config.headers.auth = userId;
    config.headers.token = token;

    let query = querystring.stringify(params);

    return new Promise(function(fulfill, reject) {
      axios
        .delete('/api/v1/' + url + '?' + query, config)
        .then(function(response) {
          fulfill(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }

  static get(url, params, token = '', userId = '') {
    config.headers.token = token;
    config.headers.auth = userId;

    let query = querystring.stringify(params);

    return new Promise(function(fulfill, reject) {
      axios
        .get('/api/v1/' + url + '?' + query, config)
        .then(function(response) {
          fulfill(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }

  static formData(url, params) {
    let context = this;

    return new Promise(function(fulfill, reject) {
      let request = new XMLHttpRequest();
      var body = new FormData();
      body.append('photo', params);

      request.onreadystatechange = e => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          let res = JSON.parse(request.response);
          fulfill(res);
        } else {
          alert('Please check your Internet connectivity or server is not responding.');
        }
      };
      request.open('POST', '/api/util/upload');
      request.send(body);
    });
  }
}
