import React from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import {ActionCreatorApp} from '../../store/app-action/app-action.js';
import {OperationApp} from '../../store/app-reducer/app-reducer.js';
import {getRatingPlace, getCommentPlace} from '../../store/app-reducer/app-selectors.js';

import {ratingTitle} from '../../constans.js';

import {propsTypeAll} from '../../propsType/propsType.js';

export const UserNewReview = ({rating, comment, onChangeRaitingPlace, onChangeCommentPlace, onSubmitReview}) => {
  const ratingKeys = Object.keys(ratingTitle);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmitReview(rating, comment);
      }}
    >
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
                onChange={() => {
                  onChangeRaitingPlace(starId);
                }}
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

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
        onChange={(evt) => {
          onChangeCommentPlace(evt.target.value);
        }}
        required
      >

      </textarea>

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
    rating: getRatingPlace(state),
    comment: getCommentPlace(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeRaitingPlace: bindActionCreators(ActionCreatorApp.actionChangeRatingPlace, dispatch),

  onChangeCommentPlace: bindActionCreators(ActionCreatorApp.actionChangeCommentPlace, dispatch),

  onSubmitReview(rating, comment) {
    dispatch(OperationApp.postComments(rating, comment));
  },
});

export const WrapperUserNewReview = connect(mapStateToProps, mapDispatchToProps)(UserNewReview);

UserNewReview.propTypes = {
  rating: propsTypeAll.number,
  comment: propsTypeAll.string,
  onChangeRaitingPlace: propsTypeAll.func,
  onChangeCommentPlace: propsTypeAll.func,
  onSubmitReview: propsTypeAll.func,
};

