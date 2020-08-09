import React from "react";
import {Link} from 'react-router-dom';

import {getModifiedRatingValue} from "../../utils/utils.js";

import {propsTypeAll} from "../../propsType/propsType.js";

export const PlaceCard = ({offer, onTitlePlaceClick, onCardPlaceHoverMove, onFavoriteBtnClick}) => {
  const {isCheckedPremium, images, price, ratingStars, titleCard, typeCard} = offer;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onCardPlaceHoverMove(offer)}
      onMouseLeave={() => onCardPlaceHoverMove(null)}>

      {isCheckedPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            width="260"
            height="200"
            alt="Place image"
            src={images[0] ? images[0] : ``}
          />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className="place-card__bookmark-button button"
            type="button"
            onClick={() => onFavoriteBtnClick(offer)}
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getModifiedRatingValue(ratingStars)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={{pathname: `/property/${offer.id}`}}
            onClick={() => onTitlePlaceClick(offer)}
          >

            {titleCard}

          </Link>
        </h2>
        <p className="place-card__type">{typeCard}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: propsTypeAll.offer,
  onTitlePlaceClick: propsTypeAll.func,
  onCardPlaceHoverMove: propsTypeAll.onTitlePlaceClick,
  onFavoriteBtnClick: propsTypeAll.func,
};
