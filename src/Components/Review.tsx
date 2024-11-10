import {Fragment} from 'react';

export type ReviewProps = {
  avatarUrl: string;
  userName: string;
  starsCount: 0 | 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
}

const formatter = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' });

export function Review({avatarUrl, userName, starsCount, text, date}: ReviewProps) {
  const formattedDate = formatter.format(new Date(date));
  const starsWidth = `${starsCount * 20}%`;
  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starsWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{formattedDate}</time>
      </div>
    </Fragment>
  );
}
