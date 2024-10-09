import {AuthorizationStatus} from "../Types/AuthorizationStatus.tsx";
import {Navigate} from "react-router-dom";
import {AppRoute} from "../Types/AppRoute.tsx";


type PrivateRouteProps = {
  authorisationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute({authorisationStatus, children}: PrivateRouteProps) {
  return authorisationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
