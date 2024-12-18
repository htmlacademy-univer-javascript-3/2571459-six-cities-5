import {Host} from '@types';

export type Comment = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}
