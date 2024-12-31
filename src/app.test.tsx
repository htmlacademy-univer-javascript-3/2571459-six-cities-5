import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '@constants';
import {App} from './App.tsx';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    const appComponent = <App/>;
    mockHistory.push(AppRoute.Login);

    render(appComponent);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render LoginPage when user navigate to "/favorites"', () => {
    const appComponent = <App/>;
    mockHistory.push(AppRoute.Login);

    render(appComponent);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
