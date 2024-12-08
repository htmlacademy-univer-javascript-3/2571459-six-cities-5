import axios, {AxiosError} from 'axios';
import {API_URL} from '../constants/constants.ts';


export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      // Обработка 401 ошибки
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
