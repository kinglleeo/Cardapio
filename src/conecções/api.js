import axios from 'axios';

export const api = axios.create();

export const iniciarRota = (RotaFinal) => {
  const newRotaFinal = RotaFinal;
  api.defaults.baseURL = `http://${newRotaFinal}`;
  localStorage.setItem('apiBaseURL', api.defaults.baseURL);
};

// Recuperar a baseURL ao carregar a página
const savedBaseURL = localStorage.getItem('apiBaseURL');
if (savedBaseURL) {
  api.defaults.baseURL = savedBaseURL;
}
