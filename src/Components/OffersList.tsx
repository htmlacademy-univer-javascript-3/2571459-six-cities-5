import {Card} from './Card.tsx';
import {CardPropsMockList} from '../mocks/MockHelpers.ts';

export function OffersList({mocks}: CardPropsMockList) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {mocks.map((offerMock) => (
        <Card key={offerMock.id} {...offerMock.props} />
      ))}
    </div>);
}
