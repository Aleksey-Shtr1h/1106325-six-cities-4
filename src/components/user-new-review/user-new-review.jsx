import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import {ratingTitle} from '../../constans.js';

export const UserNewReview = ({}) => {

  const ratingKeys = Object.keys(ratingTitle);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingKeys.map((key, id) => {

          const starId = id + 1;

          return (
            <React.Fragment key={key + id}>

              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={starId}
                id={`${starId}-stars`}
                type="radio"
                onChange={() => {}}
              />

              <label
                htmlFor={`${starId}-stars`}
                className="reviews__rating-label form__rating-label"
                title={ratingTitle[key]}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

            </React.Fragment>
          );
        })
        .sort((a, b) => b.key - a.key)}

      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({

});

export const WrapperUserNewReview = connect(mapStateToProps, mapDispatchToProps)(UserNewReview);

UserNewReview.propTypes = {

}

