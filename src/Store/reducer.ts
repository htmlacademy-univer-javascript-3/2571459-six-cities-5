import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities.ts';
import {setAuthorizationStatus, setCity, setLogin, setOffers, setOffersLoading} from './actions.ts';
import {AppState} from '../Types/AppState.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';


const initialState: AppState = {
  city: cities[5],
  offers: [],
  loading: true,
  authorizationStatus: AuthorizationStatus.NoAuth,
  login: ''
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLogin, (state, action) => {
      state.login = action.payload;
    });
});
