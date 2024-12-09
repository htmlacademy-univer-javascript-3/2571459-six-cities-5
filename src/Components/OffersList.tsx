import {CityCard} from './CityCard.tsx';
import {Offer} from '../Types/Offer.ts';
import {store} from '../Store';
import {setHoveredOffer} from '../Store/actions.ts';

type OffersListProps = {
  offers: Array<Offer>;
}

export function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => store.dispatch(setHoveredOffer(offer))}
          onMouseLeave={() => store.dispatch(setHoveredOffer(null))}
        >
          <CityCard {...offer} />
        </div>
      ))}
    </div>);
}
