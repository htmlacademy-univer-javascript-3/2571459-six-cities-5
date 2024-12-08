import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {AuthorizationStatus} from '../constants/AuthorizationStatus.ts';

function AuthorizedHeaderNav() {
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
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
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
            <span className="header__login">Sign in</span>
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
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          {status === AuthorizationStatus.Auth ? <AuthorizedHeaderNav/> : <NoAuthNavHeader/>}
        </div>
      </div>
    </header>);
}
