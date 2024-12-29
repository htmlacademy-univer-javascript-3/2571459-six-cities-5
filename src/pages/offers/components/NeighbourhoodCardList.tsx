import {NeighbourhoodCard} from '@components';
import {Offer} from '@types';

type NeighbourhoodListProps = {
  offers: Array<Offer>;
}

export function NeighbourhoodCardList({offers}: NeighbourhoodListProps) {
  return (
    <div className="near-places__list places__list tabs__content">
      {offers.map((offerMock) => (
        <div
          key={offerMock.id}
        >
          <NeighbourhoodCard {...offerMock} />
        </div>
      ))}
    </div>);
}
