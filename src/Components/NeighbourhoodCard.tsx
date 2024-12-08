import {CardBase, CardProps} from './CardBase.tsx';

export function NeighbourhoodCard({type, isPremium, price, title, previewImage, rating, isFavorite}: CardProps) {
  return (
    <CardBase
      type={type}
      price={price}
      title={title}
      previewImage={previewImage}
      rating={rating}
      cardType={'near-places'}
      isPremium={isPremium}
      isFavorite={isFavorite}
    />
  );
}
