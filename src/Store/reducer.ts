import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities.ts';
import {updateCity, updateOffers} from './actions.ts';
import {AppState} from '../Types/AppState.ts';


const initialState: AppState = {
  city: cities[5],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});
