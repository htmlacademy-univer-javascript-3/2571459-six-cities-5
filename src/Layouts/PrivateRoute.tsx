import {Navigate} from 'react-router-dom';
import {AppRoute} from '../constants/AppRoute.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';


type PrivateRouteProps = {
  authorisationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute({authorisationStatus, children}: PrivateRouteProps) {
  return authorisationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
