import {CardMock, CreateCardMock} from './MockHelpers.ts';
import {cities} from './cities.ts';

export type CityFavoritesCardsMock = {
  cityName: string;
  cardsProps: CardMock[];
}

export type CityFavoritesMock = {
  key: string;
  cityFavoritesCardsMock: CityFavoritesCardsMock;
}

export const Favorites: CityFavoritesMock[] = [
  {
    key: 'Amsterdam',
    cityFavoritesCardsMock: {
      cityName: 'Amsterdam',
      cardsProps: [
        CreateCardMock(
          '1',
          'Beautiful & luxurious apartment at great location',
          'Apartment',
          'img/apartment-small-03.jpg',
          4,
          120,
          cities[0],
          true,
          true),
      ]
    }
  },
  {
    key: 'Cologne',
    cityFavoritesCardsMock: {
      cityName: 'Cologne',
      cardsProps: [
        CreateCardMock(
          '2',
          'Beautiful & luxurious apartment at great location',
          'Room',
          'img/room-small.jpg',
          5,
          80,
          cities[0],
          false,
          true),
        CreateCardMock(
          '4',
          'Beautiful & luxurious apartment at great location',
          'Apartment',
          'img/apartment-small-04.jpg',
          3,
          180,
          cities[0],
          false,
          true),
      ]
    }
  }
];
