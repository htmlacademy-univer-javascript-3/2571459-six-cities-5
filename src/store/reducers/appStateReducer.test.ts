import { appStateReducer } from './appStateReducer';
import { setSelectedCity, setOffersLoading, setAuthorizationStatus, setPlacesSortOptions, setLogin } from '@store-actions';
import { AuthorizationStatus, PlacesSortOptions } from '@constants';
import { cities } from '@mocks';

const initialState = {
  selectedCity: cities[5],
  placesSortOptions: PlacesSortOptions.Default,
  loading: true,
  authorizationStatus: AuthorizationStatus.NoAuth,
  login: '',
};

describe('appStateReducer', () => {
  it('should return the initial state', () => {
    expect(appStateReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle setSelectedCity', () => {
    const newCity = cities[2];
    const action = setSelectedCity(newCity);
    const expectedState = { ...initialState, selectedCity: newCity };
    expect(appStateReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setOffersLoading', () => {
    const action = setOffersLoading(false);
    const expectedState = { ...initialState, loading: false };
    expect(appStateReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setAuthorizationStatus', () => {
    const action = setAuthorizationStatus(AuthorizationStatus.Auth);
    const expectedState = { ...initialState, authorizationStatus: AuthorizationStatus.Auth };
    expect(appStateReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setPlacesSortOptions', () => {
    const action = setPlacesSortOptions(PlacesSortOptions.PriceHighToLow);
    const expectedState = { ...initialState, placesSortOptions: PlacesSortOptions.PriceHighToLow };
    expect(appStateReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setLogin', () => {
    const action = setLogin('testuser');
    const expectedState = { ...initialState, login: 'testuser' };
    expect(appStateReducer(initialState, action)).toEqual(expectedState);
  });
});
