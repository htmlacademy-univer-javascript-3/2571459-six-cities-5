export type Offer = {
  type: 'Room' | 'Apartment';
  isPremium?: boolean;
  isFavorite?: boolean;
  price: number;
  title: string;
  previewImage: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  location: Location;
}
