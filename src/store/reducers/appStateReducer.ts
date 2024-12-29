import {createReducer} from '@reduxjs/toolkit';
import {
  setOffersLoading,
  setSelectedCity, setAuthorizationStatus,
  setPlacesSortOptions, setLogin
} from '@store-actions';
import {AppState} from '@types';
import {cities} from '@mocks';
import {AuthorizationStatus, PlacesSortOptions} from '@constants';

const initialState: AppState = {
  selectedCity: cities[5],
  placesSortOptions: PlacesSortOptions.Default,
  loading: true,
  authorizationStatus: AuthorizationStatus.NoAuth,
  login: '',
};

export const appStateReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setPlacesSortOptions, (state, action) => {
      state.placesSortOptions = action.payload;
    })
    .addCase(setLogin, (state, action) => {
      state.login = action.payload;
    });
});
