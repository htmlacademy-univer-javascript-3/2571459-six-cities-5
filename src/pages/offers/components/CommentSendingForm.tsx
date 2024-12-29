import React, {Fragment} from 'react';

import {sendComment} from '@api-client';
import {store} from '@store';

const titlesForRate = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
} as const;

type StarInputProps = {
  onChange: (x: React.ChangeEvent<HTMLInputElement>) => void;
  rating: '1' | '2' | '3' | '4' | '5';
}

function StarInput({rating, onChange}: StarInputProps) {
  const id = `${rating}-stars`;
  const title = titlesForRate[rating];

  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={id}
        onChange={onChange}
        type="radio"
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

type CommentSendingFormProps = {
  offerId: string;
}

export function CommentSendingForm({offerId}: CommentSendingFormProps) {
  // _ = setFormData
  const [formData, setFormData] = React.useState({
    review: '',
    rating: ''
  });
  const handleFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleRadioChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { review, rating } = formData;
    try {
      await store.dispatch(
        sendComment({
          offerId,
          comment: review,
          rating: Number(rating),
        }),
      );
      setFormData({ review: '', rating: '' });
    } catch (error) { /* empty */ }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <StarInput rating={'5'} onChange={handleRadioChange}/>
        <StarInput rating={'4'} onChange={handleRadioChange}/>
        <StarInput rating={'3'} onChange={handleRadioChange}/>
        <StarInput rating={'2'} onChange={handleRadioChange}/>
        <StarInput rating={'1'} onChange={handleRadioChange}/>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.review.length < 50}>Submit</button>
      </div>
    </form>
  );
}
