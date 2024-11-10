import {CardBase, CardProps} from './CardBase.tsx';

export function NeighbourhoodCard({placeCardType, premium, priceValue, name, imageUrl, starsCount, inBookmarks}: CardProps) {
  return (
    <CardBase
      placeCardType={placeCardType}
      priceValue={priceValue}
      name={name}
      imageUrl={imageUrl}
      starsCount={starsCount}
      cardType={'near-places'}
      premium={premium}
      inBookmarks={inBookmarks}
    />
  );
}
