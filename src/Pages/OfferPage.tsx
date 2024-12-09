import {CommentSendingForm} from '../Components/CommentSendingForm.tsx';
import {ReviewList} from '../Components/ReviewList.tsx';
import {ReviewMocks} from '../mocks/reviews.ts';
import {Map} from '../Components/Map.tsx';
import {NeighbourhoodCardList} from '../Components/NeighbourhoodCardList.tsx';
import {useEffect} from 'react';
import {store} from '../Store';
import {findNearbyOffers, getOffer, updateBookmark} from '../api/ApiClient.ts';
import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {useParams} from 'react-router-dom';
import {Header} from '../Components/Header.tsx';
import {NotFoundPage} from './NotFoundPage.tsx';
import {OfferGallery} from '../Components/OfferGallery.tsx';
import {OfferGoods} from '../Components/OfferGoods.tsx';
import {BookmarkRequest} from '../constants/BookmarkRequest.ts';

export function OfferPage() {
  const {id} = useParams();
  const offerId = id || '-';
  useEffect(() => {
    store.dispatch(getOffer(offerId));
    store.dispatch(findNearbyOffers(offerId));
  }, [offerId]);

  const nearbyOffers = useAppStoreSelector((state) => state.nearbyOffers);
  const offer = useAppStoreSelector((state) => state.currentDetailedOffer);
  if (offer === null) {
    return <NotFoundPage/>;
  }
  const starsWidth = `${offer.rating * 20}%`;
  const bookmarkClass = `place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery imageUrls={offer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <button className={bookmarkClass} type="button" onClick={ async () => await store.dispatch(offer.isFavorite
                  ? updateBookmark({id: offer.id, action: BookmarkRequest.Remove})
                  : updateBookmark({id: offer.id, action: BookmarkRequest.Add}))}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: starsWidth}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods goods={offer.goods}/>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro &&
                    <span className="offer__user-status">
                    Pro
                    </span>
                  }
                </div>
                <div className="offer__description">
                  {offer.description}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ReviewMocks.length}</span></h2>
                <ReviewList mocks={ReviewMocks}/>
                <CommentSendingForm/>
              </section>
            </div>
          </div>
          <section className="map"
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '700px'
            }}
          >
            <Map
              offers={nearbyOffers}
              height={'600px'}
              width={'1100px'}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NeighbourhoodCardList mocks={nearbyOffers}/>
          </section>
        </div>
      </main>
    </div>
  );
}
