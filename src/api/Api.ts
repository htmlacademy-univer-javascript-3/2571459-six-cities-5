import axios, {InternalAxiosRequestConfig} from 'axios';
import {API_URL, TokenKey} from '../constants/constants.ts';


const getToken = (): string => {
  const token = localStorage.getItem(TokenKey);
  return token ?? 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';
};

export const saveToken = (token: string): void => {
  localStorage.setItem(TokenKey, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(TokenKey);
};

export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });
