import {CardBase, CardProps} from './CardBase.tsx';

export function CityCard({type, isPremium, price, title, previewImage, rating, isFavorite}: CardProps) {
  return (
    <CardBase
      type={type}
      price={price}
      title={title}
      previewImage={previewImage}
      rating={rating}
      cardType={'cities'}
      isPremium={isPremium}
      isFavorite={isFavorite}
    />
  );
}
