import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://swapi.dev/api/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
