import axios, {AxiosError} from 'axios';
import {API_URL} from '../constants/constants.ts';
import {useDispatch} from 'react-redux';
import {setAuthorizationStatus} from '../Store/actions.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';


export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const dispatch = useDispatch();
    if (error.response && error.response.status === 401) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
    return Promise.reject(error);
  }
);
