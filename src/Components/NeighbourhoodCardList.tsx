import {NeighbourhoodCard} from './NeighbourhoodCard.tsx';
import {Offer} from '../Types/Offer.ts';

type NeighbourhoodListProps = {
  mocks: Array<Offer>;
}

export function NeighbourhoodCardList({mocks}: NeighbourhoodListProps) {
  return (
    <div className="near-places__list places__list tabs__content">
      {mocks.map((offerMock) => (
        <div
          key={offerMock.id}
        >
          <NeighbourhoodCard {...offerMock} />
        </div>
      ))}
    </div>);
}
