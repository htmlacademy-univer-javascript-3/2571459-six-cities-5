import {Link} from 'react-router-dom';
import {AppRoute} from '../constants/AppRoute.ts';

export type CardProps = {
  type: 'Room' | 'Apartment';
  isPremium?: boolean;
  isFavorite?: boolean;
  price: number;
  title: string;
  previewImage: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

type CardBaseProps = CardProps & {
  cardType: 'cities' | 'near-places';
}

export function CardBase({type, isPremium, price, title, previewImage, rating, isFavorite, cardType}: CardBaseProps) {
  const starsWidth = `${rating * 20}%`;
  const bookmarkClass = `place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`;
  const articleClass = `${cardType}__card place-card`;
  const imageWrapperClass = `${cardType}__image-wrapper place-card__image-wrapper`;
  return (
    <article className={articleClass}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={imageWrapperClass}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            {isFavorite ? <span className="visually-hidden">In bookmarks</span> :
              <span className="visually-hidden">To bookmarks</span>}
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsWidth}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}
