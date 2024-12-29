import {memo} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '@constants';
import {useAppStoreSelector} from '@hooks';
import {handleUpdateBookmark} from '../helpers';

export type CardProps = {
  id: string;
  type: 'Room' | 'Apartment';
  isPremium?: boolean;
  isFavorite?: boolean;
  price: number;
  title: string;
  previewImage: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  previewSize?: {
    width: number;
    height: number;
  };
}

type CardBaseProps = CardProps & {
  cardType: 'cities' | 'near-places' | 'favorites';
}

export function CardBaseNoMemo({id,
  type,
  isPremium,
  price, title,
  previewImage,
  rating,
  isFavorite,
  cardType,
  previewSize
}: CardBaseProps) {
  previewSize ??= {width: 260, height: 200};
  const starsWidth = `${rating * 20}%`;
  const bookmarkClass = `place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`;
  const articleClass = `${cardType}__card place-card`;
  const placeCardInfoClass = `${cardType}__card-info place-card__info`;
  const imageWrapperClass = `${cardType}__image-wrapper place-card__image-wrapper`;

  const isAuth = useAppStoreSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;
  const navigate = useNavigate();

  return (
    <article className={articleClass}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={imageWrapperClass}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={previewSize.width}
            height={previewSize.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={placeCardInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <button className={bookmarkClass} type="button" onClick={ async () => {
            await handleUpdateBookmark(id,
              isFavorite || false,
              isAuth,
              () => navigate(AppRoute.Login));
          }}
          >
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export const CardBase = memo(CardBaseNoMemo);
