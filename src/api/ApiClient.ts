import {AxiosInstance} from 'axios';
import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {ApiRoute} from '../Types/ApiRoutes.ts';
import {
  setAuthorizationStatus,
  setDetailedOffer,
  setFavorites,
  setLogin,
  setNearbyOffers,
  setOffers,
  setOffersLoading
} from '../Store/actions.ts';
import {Offer} from '../Types/Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';
import {store} from '../Store';
import {BookmarkRequest} from '../constants/BookmarkRequest.ts';
import {getToken, saveToken} from './Api.ts';
import {DetailedOffer} from "../Types/DetailedOffer.ts";


export const findOffers = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'offers/find',
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

export const getFavorites = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'getFavorites',
  async (_arg, {dispatch, extra: api}) => {
    if (getToken() !== '') {
      const {data} = await api.get<Offer[]>(ApiRoute.Favorites);
      dispatch(setFavorites(data));
    }
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
    store.dispatch(findOffers());
    store.dispatch(getFavorites());
  },
);

export const findNearbyOffers = createAsyncThunk<void, string, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'findNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);
    dispatch(setNearbyOffers(data));
  },
);

export const getOffer = createAsyncThunk<void, string, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'getOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<DetailedOffer>(`${ApiRoute.Offers}/${id}`);
    dispatch(setDetailedOffer(data));
  },
);
