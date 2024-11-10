import {CardProps} from '../Components/CardBase.tsx';

export type Point = {
  title: string;
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
      inBookmarks: inBookmarks
    },
    point: {
      title: name,
      lat: lat,
      lng: lng,
    }
  };
}
