import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../constants/AppRoute.ts';
import {useDispatch} from 'react-redux';
import {setAuthorizationStatus} from '../Store/actions.ts';

function AuthorizedHeaderNav() {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  };
  const login = useAppStoreSelector((state) => state.login);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{login}</span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login} onClick={signOut}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function NoAuthNavHeader() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <Link className="header__login" to={AppRoute.Login}>Sign in</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function Header() {
  const status = useAppStoreSelector((state) => state.authorizationStatus);
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {status === AuthorizationStatus.Auth ? <AuthorizedHeaderNav/> : <NoAuthNavHeader/>}
        </div>
      </div>
    </header>);
}
