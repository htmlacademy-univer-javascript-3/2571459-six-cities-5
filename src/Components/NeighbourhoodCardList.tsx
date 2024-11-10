import {CardMock} from '../mocks/MockHelpers.ts';
import {NeighbourhoodCard} from './NeighbourhoodCard.tsx';

type NeighbourhoodListProps = {
  mocks: Array<CardMock>;
}

export function NeighbourhoodCardList({mocks}: NeighbourhoodListProps) {
  return (
    <div className="near-places__list places__list tabs__content">
      {mocks.map((offerMock) => (
        <div
          key={offerMock.id}
        >
          <NeighbourhoodCard {...offerMock.props} />
        </div>
      ))}
    </div>);
}
