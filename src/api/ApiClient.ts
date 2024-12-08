import {AxiosInstance} from 'axios';
import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {ApiRoute} from '../Types/ApiRoutes.ts';
import {setAuthorizationStatus, setLogin, setOffers, setOffersLoading} from '../Store/actions.ts';
import {Offer} from '../Types/Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoading(true));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setOffersLoading(false));
    dispatch(setOffers(data));
  },
);

type LoginResponse =
{
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

type LoginCredentials = {
  email: string;
  password: string;
};

export const loginAction = createAsyncThunk<void, LoginCredentials, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<LoginResponse>(ApiRoute.Login, {email, password});
    if (data.token && data.token !== '') {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setLogin(data.email));
    }
  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<LoginResponse>(ApiRoute.Login);
    dispatch(setLogin(data.email));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);
