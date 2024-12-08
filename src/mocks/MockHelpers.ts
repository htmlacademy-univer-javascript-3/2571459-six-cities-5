import {CardProps} from '../Components/CardBase.tsx';
import {City} from '../Types/City.ts';

export type Point = {
  name: string;
  cityName: string;
  lat: number;
  lng: number;
}

export type CardMock = {
  props: CardProps;
  point: Point;
  id: string;
}

export function CreateCardMock(
  id: string,
  name: string,
  placeCardType: 'Room' | 'Apartment',
  imageUrl: string,
  starsCount: 0 | 1 | 2 | 3 | 4 | 5,
  priceValue: number,
  lat: number,
  lng: number,
  city: City,
  premium?: boolean,
  inBookmarks?: boolean): CardMock {
  return {
    id: id,
    props: {
      title: name,
      type: placeCardType,
      previewImage: imageUrl,
      rating: starsCount,
      price: priceValue,
      isPremium: premium,
      isFavorite: inBookmarks,
    },
    point: {
      name: name,
      cityName: city.name,
      lat: lat,
      lng: lng,
    }
  };
}
