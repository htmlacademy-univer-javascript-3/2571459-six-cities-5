import {AuthorizationStatus} from '../Types/AuthorizationStatus.ts';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../Types/AppRoute.ts';


type PrivateRouteProps = {
  authorisationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute({authorisationStatus, children}: PrivateRouteProps) {
  return authorisationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
