import {OfferListItem} from '../Components/OffersList.tsx';

function CreateCardPropsMock(
  id: string,
  name: string,
  placeCardType: 'Room' | 'Apartment',
  imageUrl: string,
  starsCount: 0 | 1 | 2 | 3 | 4 | 5,
  priceValue: number,
  premium?: boolean,
  inBookmarks?: boolean): OfferListItem {
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

export const Offers = [
  CreateCardPropsMock(
    '1',
    'Beautiful & luxurious apartment at great location',
    'Apartment',
    'img/apartment-01.jpg',
    4,
    120,
    true,
    true),
  CreateCardPropsMock(
    '2',
    'Beautiful & luxurious apartment at great location',
    'Room',
    'img/room.jpg',
    5,
    80,
    true),
  CreateCardPropsMock(
    '3',
    'Beautiful & luxurious apartment at great location',
    'Apartment',
    'img/apartment-02.jpg',
    4,
    132,
    true),
  CreateCardPropsMock(
    '4',
    'Beautiful & luxurious apartment at great location',
    'Apartment',
    'img/apartment-03.jpg',
    3,
    180,
    true,
    true),

];
