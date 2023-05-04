import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://642b23b0d7081590f91d081a.mockapi.io',
  headers: {'Access-Control-Allow-Origin': '*'}
});