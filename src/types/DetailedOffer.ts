import {City, Location} from '@types';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type DetailedOffer = {
  id: string;
  type: 'Room' | 'Apartment';
  isPremium?: boolean;
  isFavorite: boolean;
  price: number;
  title: string;
  previewImage: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  location: Location;
  city: City;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}
