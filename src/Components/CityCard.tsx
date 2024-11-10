import {CardBase, CardProps} from './CardBase.tsx';

export function CityCard({placeCardType, premium, priceValue, name, imageUrl, starsCount, inBookmarks}: CardProps) {
  return (
    <CardBase
      placeCardType={placeCardType}
      priceValue={priceValue}
      name={name}
      imageUrl={imageUrl}
      starsCount={starsCount}
      cardType={'cities'}
      premium={premium}
      inBookmarks={inBookmarks}
    />
  );
}
