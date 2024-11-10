import {CityCard} from './CityCard.tsx';
import {CardMock} from '../mocks/MockHelpers.ts';
import React from 'react';

type OffersListProps = {
  mocks: Array<CardMock>;
  onListItemHover: (lastId: string) => void;
}

export function OffersList({mocks, onListItemHover}: OffersListProps) {

  const handleListItemHover = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    onListItemHover(target.innerText);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {mocks.map((offerMock) => (
        <div
          key={offerMock.id}
          onMouseEnter={handleListItemHover}
        >
          <CityCard {...offerMock.props} />
        </div>
      ))}
    </div>);
}
