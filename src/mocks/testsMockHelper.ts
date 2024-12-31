import {AuthorizationStatus, PlacesSortOptions} from '@constants';
import {AppState} from '@types';
import {cities} from '@mocks';

export const makeFakeStore = (initialState: Partial<AppState>): AppState => ({
  authorizationStatus: initialState.authorizationStatus ?? AuthorizationStatus.NoAuth,
  selectedCity: initialState.selectedCity ?? cities[4],
  placesSortOptions: initialState.placesSortOptions ?? PlacesSortOptions.Default,
  loading: initialState.loading ?? false,
  login: initialState.login ?? 'abc@a.ru'
});
