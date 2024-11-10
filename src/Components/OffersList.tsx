import {Card} from './Card.tsx';
import {CardPropsMock} from '../mocks/MockHelpers.ts';

type OffersListProps = {
  mocks: Array<CardPropsMock>;
  onListItemHover: any;
}

export function OffersList({mocks, onListItemHover}: OffersListProps) {
  const handleListItemHover = (evt) => {
    onListItemHover(evt.target.innerText);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {mocks.map((offerMock) => (
        <div
          key={offerMock.id}
          onMouseEnter={handleListItemHover}
        >
          <Card {...offerMock.props} />
        </div>
      ))}
    </div>);
}
