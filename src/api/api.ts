import axios from 'axios';
import {API_URL} from '../constants/constants.ts';


export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});
