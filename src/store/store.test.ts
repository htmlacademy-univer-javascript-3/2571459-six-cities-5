import { store } from '@store';
import { setAuthorizationStatus } from '@store-actions';
import { AuthorizationStatus } from '@constants';

describe('Redux store middleware', () => {
  it('should correctly process dispatched actions', () => {
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));

    const state = store.getState();
    expect(state.app.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });
});
