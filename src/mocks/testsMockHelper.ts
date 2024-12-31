import {AuthorizationStatus, PlacesSortOptions} from '@constants';
import {AppState, City, Host, Location, Offer, Comment} from '@types';
import {cities} from '@mocks';

export const makeFakeStore = (initialState: Partial<AppState>): AppState => ({
  authorizationStatus: initialState.authorizationStatus ?? AuthorizationStatus.NoAuth,
  selectedCity: initialState.selectedCity ?? cities[4],
  placesSortOptions: initialState.placesSortOptions ?? PlacesSortOptions.Default,
  loading: initialState.loading ?? false,
  login: initialState.login ?? 'abc@a.ru'
});


export function CreateOfferMock(
  id: string,
  name: string,
  placeCardType: 'Room' | 'Apartment',
  imageUrl?: string,
  starsCount?: 0 | 1 | 2 | 3 | 4 | 5,
  priceValue?: number,
  premium?: boolean,
  inBookmarks?: boolean,
  location?: Location,
  city?: City): Offer {
  return {
    id: id,
    title: name,
    type: placeCardType,
    previewImage: imageUrl ?? '-',
    rating: starsCount ?? 5,
    price: priceValue ?? 1000,
    isPremium: premium,
    isFavorite: inBookmarks,
    location: location ?? {
      longitude: 1,
      latitude: 2,
      zoom: 10
    },
    city: city ?? cities[0]
  };
}

export function CreateCommentMock(
  id?:string,
  comment?: string,
  date?: string,
  user?: Host,
): Comment {
  return {
    id:id ?? 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: date ?? '2019-05-08T14:13:56.569Z',
    user: user ?? {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: comment ?? 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  };
}
