import {createAction} from '@reduxjs/toolkit';
import {City, Comment, DetailedOffer, Offer} from '@types';
import {AuthorizationStatus, PlacesSortOptions} from '@constants';

export const setOffers = createAction<Offer[]>('setOffers');
export const setHoveredOffer = createAction<Offer | null>('setHoveredOffer');
export const setSelectedCity = createAction<City>('setSelectedCity');
export const setOffersLoading = createAction<boolean>('isLoading');
export const setFavorites = createAction<Offer[]>('setFavorites');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('authStatus');
export const setLogin = createAction<string>('login');
export const setNearbyOffers = createAction<Offer[]>('setNearbyOffers');
export const setPlacesSortOptions = createAction<PlacesSortOptions>('setPlacesSortOptions');
export const setDetailedOffer = createAction<DetailedOffer>('setDetailedOffer');
export const setComments = createAction<Comment[]>('setComments');
