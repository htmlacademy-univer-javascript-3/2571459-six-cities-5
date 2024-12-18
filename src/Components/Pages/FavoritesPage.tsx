import {CardProps} from '../Components/CardBase.tsx';
import {useAppStoreSelector} from '@hooks';
import {Offer} from '@types';
import {store} from '../Store';
import {updateBookmark} from '../api/ApiClient.ts';
import {BookmarkRequest} from '@constants';
import {Header} from '@layouts';


function FavoritesCard({id, type, isPremium, isFavorite, price, title, previewImage, rating}: CardProps) {
  const starsWidth = `${rating * 20}%`;
  return (
    <article className="favorites__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={ async () => await store.dispatch(isFavorite
            ? updateBookmark({id: id, action: BookmarkRequest.Remove})
            : updateBookmark({id: id, action: BookmarkRequest.Add}))}
          >
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

type CityFavoritesListProps = {
  cards: Offer[];
}

function CityFavoritesList({cards}: CityFavoritesListProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cards[0].city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cards.map((card) => (
          <FavoritesCard key={card.id} {...card} />
        ))}
      </div>
    </li>
  );
}

type FavoritesListProps = {
  favorites: Offer[];
}

function groupFavoritesByCity(offers: Offer[]): { [cityName: string]: Offer[] } {
  const groupedOffers: { [cityName: string]: Offer[] } = {};

  offers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!groupedOffers[cityName]) {
      groupedOffers[cityName] = [];
    }
    groupedOffers[cityName].push(offer);
  });

  return groupedOffers;
}

function FavoritesList({favorites}: FavoritesListProps) {
  const groupedOffers = groupFavoritesByCity(favorites);
  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((cityName) =>
        <CityFavoritesList key={cityName} cards={groupedOffers[cityName]}/>
      )}
    </ul>
  );
}

export function FavoritesPage() {
  const favorites = useAppStoreSelector((state) => state.favorites);
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favorites={favorites}/>
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
