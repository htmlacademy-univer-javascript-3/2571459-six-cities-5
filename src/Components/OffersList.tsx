import {CityCard} from './CityCard.tsx';
import React from 'react';
import {Offer} from '../Types/Offer.ts';

type OffersListProps = {
  offers: Array<Offer>;
  onListItemHover: (lastId: string) => void;
}

export function OffersList({offers, onListItemHover}: OffersListProps) {

  const handleListItemHover = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    onListItemHover(target.innerText);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={handleListItemHover}
        >
          <CityCard {...offer} />
        </div>
      ))}
    </div>);
}
