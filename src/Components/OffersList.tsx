import {Card} from './Card.tsx';
import {CardPropsMock} from '../mocks/MockHelpers.ts';

type OffersListProps = {
  offers: Array<CardPropsMock>;
}

export function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offerMock) => (
        <Card key={offerMock.id} {...offerMock.props} />
      ))}
    </div>);
}
