import axios from 'axios';

const api = axios.create({
  // setar o ip que aparece no console
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
