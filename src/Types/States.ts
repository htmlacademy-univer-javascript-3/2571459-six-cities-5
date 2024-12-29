import {AuthorizationStatus, PlacesSortOptions} from '@constants';
import {City, Comment, DetailedOffer, Offer} from '@types';


export type OffersState = {
  hoveredOffer: Offer | null;
  offers: Offer[];
  favorites: Offer[];
  nearbyOffers: Offer[];
  currentDetailedOffer: DetailedOffer | null;
  offerComments: Comment[];
}

export type AppState = {
  selectedCity: City;
  placesSortOptions: PlacesSortOptions;
  loading: boolean;
  authorizationStatus: AuthorizationStatus;
  login: string;
}
