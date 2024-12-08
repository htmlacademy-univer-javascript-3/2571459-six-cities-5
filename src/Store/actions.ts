import {createAction} from '@reduxjs/toolkit';
import {CardMock} from '../mocks/MockHelpers.ts';
import {City} from '../Types/types.ts';

export const updateOffers = createAction<{offers: CardMock[]}>('setOffers');
export const updateCity = createAction<{city: City}>('setCity');
