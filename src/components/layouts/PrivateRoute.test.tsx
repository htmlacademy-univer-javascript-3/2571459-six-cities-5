import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { PrivateRoute } from './PrivateRoute';
import { AuthorizationStatus, AppRoute } from '@constants';
import { useAppStoreSelector } from '@hooks';

vi.mock('@hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@hooks')>()),
  useAppStoreSelector: vi.fn(),
}));

describe('PrivateRoute', () => {
  const mockUseAppStoreSelector = useAppStoreSelector as jest.Mock;

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render children if the user is authorized', () => {
    mockUseAppStoreSelector.mockReturnValue(AuthorizationStatus.Auth);

    const { getByText } = render(
      <MemoryRouter>
        <PrivateRoute>
          <div>Authorized Content</div>
        </PrivateRoute>
      </MemoryRouter>
    );

    expect(getByText('Authorized Content')).toBeInTheDocument();
  });

  it('should navigate to login if the user is not authorized', () => {
    mockUseAppStoreSelector.mockReturnValue(AuthorizationStatus.NoAuth);

    const { queryByText } = render(
      <MemoryRouter initialEntries={[AppRoute.Main]}>
        <PrivateRoute>
          <div>Authorized Content</div>
        </PrivateRoute>
      </MemoryRouter>
    );

    expect(queryByText('Authorized Content')).not.toBeInTheDocument();
  });
});
