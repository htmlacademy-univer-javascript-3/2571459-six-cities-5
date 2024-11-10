import {ReviewProps} from '../Components/Review.tsx';

export type ReviewsMock = {
  props: ReviewProps;
  key: string;
}

export const ReviewMocks: ReviewsMock[] = [
  {
    key: '1',
    props: {
      avatarUrl: 'img/avatar-max.jpg',
      userName: 'Max',
      starsCount: 4,
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building\n' +
        ' is green and from 18th century.',
      date: '2019-04-24'
    }
  }
];
