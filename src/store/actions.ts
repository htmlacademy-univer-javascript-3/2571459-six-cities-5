import {createAction} from '@reduxjs/toolkit';
import {City, Comment, DetailedOffer, Offer} from '@types';
import {AuthorizationStatus, PlacesSortOptions} from '@constants';

export const setOffers = createAction<Offer[]>('offers/set');
export const setHoveredOffer = createAction<Offer | null>('offers/setHovered');
export const setDetailedOffer = createAction<DetailedOffer>('offers/setDetailed');
export const setNearbyOffers = createAction<Offer[]>('offers/setNearby');
export const setSelectedCity = createAction<City>('city/setSelected');
export const setOffersLoading = createAction<boolean>('loading/set');
export const setFavorites = createAction<Offer[]>('favorites/set');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('auth/set');
export const setLogin = createAction<string>('login/set');
export const setPlacesSortOptions = createAction<PlacesSortOptions>('placesSortOptions/set');
export const setComments = createAction<Comment[]>('comments/set');
