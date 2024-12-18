import {AuthorizationStatus, PlacesSortOptions} from '@constants';
import {City, Comment, DetailedOffer, Offer} from '@types';

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
