import {createAction} from '@reduxjs/toolkit';
import {City} from '../Types/City.ts';
import {Offer} from '../Types/Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';
import {PlacesSortOptions} from '../constants/PlacesSortOptions.ts';
import {DetailedOffer} from '../Types/DetailedOffer.ts';
import {Comment} from '../Types/Comment.ts';

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
