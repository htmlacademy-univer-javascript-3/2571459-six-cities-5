import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities.ts';
import {setOffersLoading, setCity, setOffers} from './actions.ts';
import {AppState} from '../Types/AppState.ts';


const initialState: AppState = {
  city: cities[5],
  offers: [],
  loading: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.loading = action.payload;
    });
});
