import {createReducer} from '@reduxjs/toolkit';
import {
  setOffers,
  setHoveredOffer,
  setNearbyOffers,
  setFavorites,
  setDetailedOffer,
  setComments
} from '@store-actions';
import {OffersState} from '@types';

const initialState: OffersState = {
  offers: [],
  hoveredOffer: null,
  nearbyOffers: [],
  favorites: [],
  currentDetailedOffer: null,
  offerComments: []
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setHoveredOffer, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setDetailedOffer, (state, action) => {
      state.currentDetailedOffer = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.offerComments = action.payload;
    });
});
