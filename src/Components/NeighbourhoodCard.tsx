import {CardBase, CardProps} from './CardBase.tsx';

export function NeighbourhoodCard({id, type, isPremium, price, title, previewImage, rating, isFavorite}: CardProps) {
  return (
    <CardBase
      id={id}
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
