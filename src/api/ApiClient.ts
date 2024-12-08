import { AxiosInstance } from 'axios';
import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {ApiRoute} from '../Types/ApiRoutes.ts';
import {setOffersLoading, setOffers} from '../Store/actions.ts';
import {Offer} from '../Types/Offer.ts';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  extra: AxiosInstance;
}>(
  'offerList/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoading(true));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setOffersLoading(false));
    dispatch(setOffers(data));
  },
);
