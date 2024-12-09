import {AxiosInstance} from 'axios';
import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {ApiRoute} from '../Types/ApiRoutes.ts';
import {setAuthorizationStatus, setLogin, setOffers, setOffersLoading} from '../Store/actions.ts';
import {Offer} from '../Types/Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';
import {store} from '../Store';
import {BookmarkRequest} from '../constants/BookmarkRequest.ts';
import {saveToken} from './Api.ts';


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

type LoginData = {
  email: string;
  password: string;
};

export const login = createAsyncThunk<void, LoginData, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<LoginResponse>(ApiRoute.Login, {email, password});
      if (data.token && data.token !== '') {
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(setLogin(data.email));
        saveToken(data.token);
      }
    } catch (e) { /* empty */ }
  },
);

type updateBookmarkRequest = {
  id: string;
  action: BookmarkRequest;
}

export const updateBookmark = createAsyncThunk<void, updateBookmarkRequest, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'updateOfferBookmark',
  async (request, {extra: api}) => {
    await api.post(`${ApiRoute.Favorites}/${request.id}/${request.action}`);
    store.dispatch(fetchOffersAction());
  },
);
