import {City} from './City.ts';
import {Offer} from './Offer.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';
import {PlacesSortOptions} from '../constants/PlacesSortOptions.ts';
import {DetailedOffer} from './DetailedOffer.ts';
import {Comment} from './Comment.ts';

export type AppState = {
  selectedCity: City;
  hoveredOffer: Offer | null;
  offers: Offer[];
  favorites: Offer[];
  nearbyOffers: Offer[];
  placesSortOptions: PlacesSortOptions;
  loading: boolean;
  authorizationStatus: AuthorizationStatus;
  login: string;
  currentDetailedOffer: DetailedOffer | null;
  offerComments: Comment[];
}
