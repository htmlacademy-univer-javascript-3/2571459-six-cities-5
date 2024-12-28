import {AxiosInstance} from 'axios';
import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {
  setAuthorizationStatus,
  setComments,
  setDetailedOffer,
  setFavorites,
  setLogin,
  setNearbyOffers,
  setOffers,
  setOffersLoading
} from '@store-actions';
import {Comment, DetailedOffer, Offer} from '@types';
import {ApiRoute, AuthorizationStatus, BookmarkRequest} from '@constants';
import {store} from '@store';
import {getToken, saveToken} from '@api';


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

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<LoginResponse>(ApiRoute.Login);
      dispatch(setLogin(data.email));
      saveToken(data.token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (err) { /* empty */ }
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

type CommentRequest = {
  offerId: string;
  comment: string;
  rating: number;
};

export const sendComment = createAsyncThunk<void, CommentRequest, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'sendComment',
  async ({offerId, comment, rating}, {extra: api}) => {
    await api.post(`${ApiRoute.Comments}/${offerId}`, {comment, rating});
  },
);

export const getComments = createAsyncThunk<void, string, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'getComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);
    dispatch(setComments(data));
  },
);

