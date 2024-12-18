import {CardBase, CardProps} from '@components';

export function CityCard({id, type, isPremium, price, title, previewImage, rating, isFavorite}: CardProps) {
  return (
    <CardBase
      id={id}
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
