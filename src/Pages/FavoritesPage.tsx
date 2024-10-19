import {CardProps} from '../Components/Card.tsx';
import {CityFavoritesCardsMock, CityFavoritesMock} from '../mocks/favorites.ts';


function FavoritesCard({placeCardType, premium, priceValue, name, imageUrl, starsCount}: CardProps) {
  const starsWidth = `${starsCount * 20}%`;
  return (
    <article className="favorites__card place-card">
      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imageUrl} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{placeCardType}</p>
      </div>
    </article>);
}

function CityFavoritesList({cityName, cardsProps}: CityFavoritesCardsMock) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cardsProps.map((favoriteCardMock) => (
          <FavoritesCard key={favoriteCardMock.id} {...favoriteCardMock.props} />
        ))}
      </div>
    </li>
  );
}

type FavoritesListProps = {
  mocks: CityFavoritesMock[];
}

function FavoritesList({mocks}: FavoritesListProps) {
  return (
    <ul className="favorites__list">
      {mocks.map((cityFavoritesMock) => (
        <CityFavoritesList key={cityFavoritesMock.key} {...cityFavoritesMock.cityFavoritesCardsMock}/>
      ))}
    </ul>
  );
}

type FavoritesPageProps = {
  favoritesMocks: CityFavoritesMock[];
}

export function FavoritesPage({favoritesMocks}: FavoritesPageProps) {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
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
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList mocks={favoritesMocks}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
