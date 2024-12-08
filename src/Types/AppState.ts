import {City} from './City.ts';
import {Offer} from './Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';

export type AppState = {
  city: City;
  offers: Offer[];
  loading: boolean;
  authorizationStatus: AuthorizationStatus;
  login: string;
}
