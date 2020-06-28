import React from "react";
import PropTypes from "prop-types";

import {getModifiedRatingValue} from "../../utils/utils.js";

import {propsTypeOffer} from "../../propsType/propsType.js";

export const PlaceCard = ({offer, onTitlePlaceClick, onArticleMoveMouse}) => {
  const {isCheckedPremium, images, price, ratingStars, titleCard, typeCard} = offer;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onArticleMoveMouse(offer)}
      onMouseLeave={() => onArticleMoveMouse(null)}>

      {isCheckedPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={images[images.length - 1]} width="260" height="200" alt="Place image" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
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
          <a onClick={() => onTitlePlaceClick(offer)} href="#">{titleCard}</a>
        </h2>
        <p className="place-card__type">{typeCard}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape(propsTypeOffer).isRequired,
  onTitlePlaceClick: PropTypes.func.isRequired,
  onArticleMoveMouse: PropTypes.func.isRequired,
};