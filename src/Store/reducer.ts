import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities.ts';
import {Offers} from '../mocks/offers.ts';
import {CardMock} from '../mocks/MockHelpers.ts';
import {updateCity, updateOffers} from './actions.ts';
import {City} from '../Types/City.ts';


type State = {
  city: City;
  offers: CardMock[];
}

const initialState: State = {
  city: cities[5],
  offers: Offers,
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
