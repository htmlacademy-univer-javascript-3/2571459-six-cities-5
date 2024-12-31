import { renderHook } from '@testing-library/react';
import { useAppStoreSelector } from '@hooks';
import { Provider } from 'react-redux';
import { store } from '@store';
import type { ReactNode } from 'react';

describe('useAppStoreSelector', () => {
  it('should select state correctly', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useAppStoreSelector((state) => state.app), { wrapper });

    expect(result.current).toEqual(store.getState().app);
  });
});
