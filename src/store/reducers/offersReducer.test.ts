import { offersReducer } from './offersReducer';
import { setOffers, setHoveredOffer, setNearbyOffers, setFavorites, setComments } from '@store-actions';
import {CreateCommentMock, CreateOfferMock} from '../../mocks/testsMockHelper.ts';

const initialState = {
  offers: [],
  hoveredOffer: null,
  nearbyOffers: [],
  favorites: [],
  currentDetailedOffer: null,
  offerComments: [],
};

describe('offersReducer', () => {
  it('should return the initial state', () => {
    expect(offersReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle setOffers', () => {
    const newOffers = [CreateOfferMock('123', 'TestOffer1', 'Room'), CreateOfferMock('123', 'TestOffer2', 'Apartment')];
    const action = setOffers(newOffers);
    const expectedState = { ...initialState, offers: newOffers };
    expect(offersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setHoveredOffer', () => {
    const hoveredOffer = CreateOfferMock('123', 'TestOffer1', 'Room');
    const action = setHoveredOffer(hoveredOffer);
    const expectedState = { ...initialState, hoveredOffer };
    expect(offersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setNearbyOffers', () => {
    const nearbyOffers = [CreateOfferMock('123', 'TestOffer1', 'Room'), CreateOfferMock('123', 'TestOffer2', 'Apartment')];
    const action = setNearbyOffers(nearbyOffers);
    const expectedState = { ...initialState, nearbyOffers };
    expect(offersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setFavorites', () => {
    const favorites = [CreateOfferMock('123', 'TestOffer1', 'Room'), CreateOfferMock('123', 'TestOffer2', 'Apartment')];
    const action = setFavorites(favorites);
    const expectedState = { ...initialState, favorites };
    expect(offersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setComments', () => {
    const comments = [CreateCommentMock('123', 'Very good'), CreateCommentMock('234', 'Very bad')];
    const action = setComments(comments);
    const expectedState = { ...initialState, offerComments: comments };
    expect(offersReducer(initialState, action)).toEqual(expectedState);
  });
});
