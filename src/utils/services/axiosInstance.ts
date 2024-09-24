import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.binance.com/api/v3/',
  timeout: 30000
})

// Log Error,Config,...  for api
api.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
})