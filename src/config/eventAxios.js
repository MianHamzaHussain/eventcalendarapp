import axios from 'axios';
const eventAxios = token => {
  const instance = axios.create({
    baseURL: 'https://eventserver-production.up.railway.app/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  instance.interceptors.request.use(
    config => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      Promise.reject(error);
    },
  );

  return instance;
};

export default eventAxios;
