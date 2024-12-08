import {createAction} from '@reduxjs/toolkit';
import {City} from '../Types/City.ts';
import {Offer} from '../Types/Offer.ts';

export const setOffers = createAction<Offer[]>('setOffers');
export const setCity = createAction<City>('setCity');
export const setOffersLoading = createAction<boolean>('offers/isLoading');
