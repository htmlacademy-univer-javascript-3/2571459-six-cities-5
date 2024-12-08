import {CardMock, CreateCardMock} from './MockHelpers.ts';
import {cities} from "./cities.ts";

export const Offers: CardMock[] = [
  CreateCardMock(
    '1',
    'Beautiful & luxurious apartment at great location',
    'Apartment',
    'img/apartment-01.jpg',
    4,
    120,
    52.3909553943508,
    4.85309666406198,
    cities[5],
    true,
    true),
  CreateCardMock(
    '2',
    'Wood and stone place',
    'Room',
    'img/room.jpg',
    5,
    80,
    52.3609553943508,
    4.85309666406198,
    cities[5],
    true),
  CreateCardMock(
    '3',
    'Canal View Prinsengracht',
    'Apartment',
    'img/apartment-02.jpg',
    4,
    132,
    52.3909553943508,
    4.929309666406198,
    cities[5],
    true),
  CreateCardMock(
    '4',
    'Nice, cozy, warm big bed apartment',
    'Apartment',
    'img/apartment-03.jpg',
    3,
    180,
    52.3809553943508,
    4.939309666406198,
    cities[0],
    true,
    true),
];
