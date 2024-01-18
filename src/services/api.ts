import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.easy.risestudio.com.br/',
});

export default api;
