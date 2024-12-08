import {createAction} from '@reduxjs/toolkit';
import {City} from '../Types/City.ts';
import {Offer} from '../Types/Offer.ts';

export const updateOffers = createAction<{offers: Offer[]}>('setOffers');
export const updateCity = createAction<{city: City}>('setCity');
