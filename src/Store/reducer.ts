import {createAction, createReducer} from '@reduxjs/toolkit';
import {City} from '../Types/types.ts';
import {CITY} from '../mocks/city.ts';
import {Offers} from '../mocks/offers.ts';
import {CardMock} from '../mocks/MockHelpers.ts';


type State = {
  city: City;
  offers: CardMock[];
}

const initialState: State = {
  city: CITY,
  offers: Offers,
};

const updateOffers = createAction<{offers: CardMock[]}>('setOffers');
const updateCity = createAction<{city: City}>('setCity');

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});
