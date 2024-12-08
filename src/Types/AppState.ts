import {City} from './City.ts';
import {Offer} from './Offer.ts';

export type AppState = {
  city: City;
  offers: Offer[];
  loading: boolean;
}
