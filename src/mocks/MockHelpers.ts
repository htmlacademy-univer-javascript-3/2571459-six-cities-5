import {CardProps} from '../Components/Card.tsx';

export type CardPropsMock = { props: CardProps; id: string }
export type CardPropsMockList = {
  mocks: Array<CardPropsMock>;
}

export function CreateCardPropsMock(
  id: string,
  name: string,
  placeCardType: 'Room' | 'Apartment',
  imageUrl: string,
  starsCount: 0 | 1 | 2 | 3 | 4 | 5,
  priceValue: number,
  premium?: boolean,
  inBookmarks?: boolean): CardPropsMock {
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
    }};
}
