import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://192.168.0.100:9865',
  headers: {'Access-Control-Allow-Origin': '*'}
});