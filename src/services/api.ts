import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/danilo-vieira/plantmanager-expo-deploy'
});

export default api;