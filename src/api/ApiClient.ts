import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {ApiRoute} from '../Types/ApiRoutes.ts';
import {useDispatch} from 'react-redux';
import {updateCity, updateOffers} from '../Store/actions.ts';
import {Offer} from '../Types/Offer.ts';
import {AppState} from '../Types/AppState.ts';


export const fetchOffers = createAsyncThunk<void, undefined, {
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (_, {extra: api}) => {
    const dispatch = useDispatch();
    const {data} = await api.get<Offer[]>(ApiRoute.Offer);
    dispatch(updateOffers({offers: data}));
    dispatch(updateCity({city: data[0].city}));
    // dispatch(setLoadingStatus(false));
  },
);
