import {Link} from 'react-router-dom';
import {AppRoute} from '../Types/AppRoute.ts';

export type CardProps = {
  placeCardType: 'Room' | 'Apartment';
  premium?: boolean;
  inBookmarks?: boolean;
  priceValue: number;
  name: string;
  imageUrl: string;
  starsCount: 0 | 1 | 2 | 3 | 4 | 5;
}

type CardBaseProps = CardProps & {
  cardType: 'cities' | 'near-places';
}

export function CardBase({placeCardType, premium, priceValue, name, imageUrl, starsCount, inBookmarks, cardType}: CardBaseProps) {
  const starsWidth = `${starsCount * 20}%`;
  const bookmarkClass = `place-card__bookmark-button ${inBookmarks && 'place-card__bookmark-button--active'} button`;
  const articleClass = `${cardType}__card place-card`;
  const imageWrapperClass = `${cardType}__image-wrapper place-card__image-wrapper`;
  return (
    <article className={articleClass}>
      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={imageWrapperClass}>
        <a href="#">
          <img className="place-card__image" src={imageUrl} width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            {inBookmarks ? <span className="visually-hidden">In bookmarks</span> :
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
          <Link to={AppRoute.Offer}>{name}</Link>
        </h2>
        <p className="place-card__type">{placeCardType}</p>
      </div>
    </article>);
}
