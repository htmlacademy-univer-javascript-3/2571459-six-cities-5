import {Navigate} from 'react-router-dom';
import {AppRoute} from '../constants/AppRoute.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';
import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';


type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps) {
  const status = useAppStoreSelector((state) => state.authorizationStatus);
  return status === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
