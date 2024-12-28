import {CardBase, CardProps} from '@components';
import {AppRoute} from '@constants';
import {useAppStoreSelector} from '@hooks';
import {Header} from '@layouts';
import {Offer} from '@types';
import {Link} from 'react-router-dom';
import {FavoritesEmptyPage} from '@pages';


function FavoritesCard({id, type, isPremium, isFavorite, price, title, previewImage, rating, previewSize}: CardProps) {
  return (
    <CardBase
      id={id}
      type={type}
      price={price}
      title={title}
      previewImage={previewImage}
      rating={rating}
      cardType={'favorites'}
      isPremium={isPremium}
      isFavorite={isFavorite}
      previewSize={previewSize}
    />
  );
}

type CityFavoritesListProps = {
  cards: Offer[];
}

function CityFavoritesList({cards}: CityFavoritesListProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{cards[0].city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cards.map((card) => (
          <FavoritesCard key={card.id} {...card} previewSize={{width: 150, height: 110}} />
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
  if (favorites.length === 0) {
    return <FavoritesEmptyPage/>;
  }
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
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
