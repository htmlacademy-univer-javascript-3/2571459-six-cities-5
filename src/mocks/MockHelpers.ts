import {CardProps} from '../Components/CardBase.tsx';
import {City} from '../Types/types.ts';

export type Point = {
  name: string;
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
      name: name,
      placeCardType: placeCardType,
      imageUrl: imageUrl,
      starsCount: starsCount,
      priceValue: priceValue,
      premium: premium,
      inBookmarks: inBookmarks,
      city: city
    },
    point: {
      name: name,
      lat: lat,
      lng: lng,
    }
  };
}
