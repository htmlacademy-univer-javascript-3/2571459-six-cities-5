import {Review} from './Review.tsx';
import {Comment} from '../Types/Comment.ts';

type ReviewListProps = {
  comments: Comment[];
}

export function ReviewList({comments}: ReviewListProps){
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <li className="reviews__item"
          key={comment.id}
        >
          <Review {...comment}/>
        </li>
      ))}
    </ul>
  );
}
