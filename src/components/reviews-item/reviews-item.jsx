import React from 'react';
import PropTypes from 'prop-types';

import {getModifiedRatingValue} from "../../utils/utils.js";

import {propsTypeReview} from "../../propsType/propsType.js";

const getTransformDate = (date) => {
  const year = date.getFullYear() + 1;
  const month = date.getMonth();
  return `Month${month} ${year}`;
};

export const ReviewsItem = ({review}) => {
  const {ratingStars, descriptions, date, nameUser} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {nameUser}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getModifiedRatingValue(ratingStars)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {descriptions}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getTransformDate(date)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape(propsTypeReview).isRequired,
};
