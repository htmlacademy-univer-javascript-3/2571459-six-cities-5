import {Card, CardProps} from './Card.tsx';

type OffersListProps = {
  offers: Array<OfferListItem>;
}

export type OfferListItem = { props: CardProps; id: string }

export function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offerMock) => (
        <Card key={offerMock.id} {...offerMock.props} />
      ))}
    </div>);
}
