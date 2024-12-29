import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '@constants';
import {useAppStoreSelector} from '@hooks';


type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps) {
  const status = useAppStoreSelector((state) => state.app.authorizationStatus);
  return status === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
