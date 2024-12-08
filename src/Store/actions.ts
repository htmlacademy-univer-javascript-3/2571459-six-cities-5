import {createAction} from '@reduxjs/toolkit';
import {City} from '../Types/City.ts';
import {Offer} from '../Types/Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';

export const setOffers = createAction<Offer[]>('setOffers');
export const setCity = createAction<City>('setCity');
export const setOffersLoading = createAction<boolean>('offers/isLoading');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('authStatus');
export const setLogin = createAction<string>('login');
