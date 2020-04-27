import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pad-api.yses.org/api',
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
  }
});

export default api;

export * from './auth';
export * from './user'; 
export * from './bill';