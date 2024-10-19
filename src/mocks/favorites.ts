import {CardPropsMock, CreateCardPropsMock} from './MockHelpers.ts';

export type CityFavoritesCardsMock = {
  cityName: string;
  cardsProps: CardPropsMock[];
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
        CreateCardPropsMock(
          '1',
          'Beautiful & luxurious apartment at great location',
          'Apartment',
          'img/apartment-small-03.jpg',
          4,
          120,
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
        CreateCardPropsMock(
          '2',
          'Beautiful & luxurious apartment at great location',
          'Room',
          'img/room-small.jpg',
          5,
          80,
          false,
          true),
        CreateCardPropsMock(
          '4',
          'Beautiful & luxurious apartment at great location',
          'Apartment',
          'img/apartment-small-04.jpg',
          3,
          180,
          false,
          true),
      ]
    }
  }
];
