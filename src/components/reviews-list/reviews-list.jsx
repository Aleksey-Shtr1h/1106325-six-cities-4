import React from 'react';

import {ReviewsItem} from '../reviews-item/reviews-item.jsx';
import {WrapperUserNewReview} from '../user-new-review/user-new-review.jsx';

import {AuthorizationStatus} from '../../store/user-reducer/user-reducer.js';

import {propsTypeAll} from "../../propsType/propsType.js";

export const ReviewsList = ({reviews, authorizationStatus}) => {
  const reviewsCount = reviews.length;

  return (
    <section className="property__reviews reviews">

      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>

      <ul className="reviews__list">

        {reviews
          .sort((prev, next) => next.date - prev.date)
          .map((review, index) =>
            <ReviewsItem
              key={review.id}
              review={review}
              index={index}
            />
          )
        };
      </ul>

      {authorizationStatus === AuthorizationStatus.AUTH
        &&
      <WrapperUserNewReview/>}

    </section>
  );

};

ReviewsList.propTypes = {
  reviews: propsTypeAll.reviews,
  authorizationStatus: propsTypeAll.string,
};
