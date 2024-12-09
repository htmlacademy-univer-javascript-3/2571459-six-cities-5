import {Host} from './DetailedOffer.ts';

export type Comment = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}
