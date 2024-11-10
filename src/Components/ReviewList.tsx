import {Review} from './Review.tsx';
import {ReviewsMock} from '../mocks/reviews.ts';

type ReviewListProps = {
  mocks: ReviewsMock[];
}

export function ReviewList({mocks}: ReviewListProps){
  return (
    <ul className="reviews__list">
      {mocks.map((reviewMock) => (
        <li className="reviews__item"
          key={reviewMock.key}
        >
          <Review {...reviewMock.props}/>
        </li>
      ))}
    </ul>
  );
}
