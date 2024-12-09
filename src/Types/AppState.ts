import {City} from './City.ts';
import {Offer} from './Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';
import {PlacesSortOptions} from '../Components/SortVariants.tsx';

export type AppState = {
  city: City;
  offers: Offer[];
  favorites: Offer[];
  nearbyOffers: Offer[];
  placesSortOptions: PlacesSortOptions;
  loading: boolean;
  authorizationStatus: AuthorizationStatus;
  login: string;
}
