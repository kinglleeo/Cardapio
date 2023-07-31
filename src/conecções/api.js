import axios from 'axios';

export const api = axios.create();

export const iniciarRota = (RotaFinal) => {
  const newRotaFinal = RotaFinal;
  api.defaults.baseURL = `http://${newRotaFinal}`;
  sessionStorage.setItem('apiBaseURL', api.defaults.baseURL);
};

const savedBaseURL = sessionStorage.getItem('apiBaseURL');
if (savedBaseURL) {
  api.defaults.baseURL = savedBaseURL;
}