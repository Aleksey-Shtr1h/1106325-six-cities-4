import React from "react";
import PropTypes from "prop-types";

export const PlaceCard = ({offer, onTitlePlaceClick, onArticleMoveMouse}) => {

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onArticleMoveMouse(offer)}
      onMouseLeave={() => onArticleMoveMouse(null)}
    >

      {offer.isCheckedPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
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
            <span style={{width: offer.ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={onTitlePlaceClick} href="#">{offer.titleCard}</a>
        </h2>
        <p className="place-card__type">{offer.typeCard}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isCheckedPremium: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ratingStars: PropTypes.string.isRequired,
    titleCard: PropTypes.string.isRequired,
    typeCard: PropTypes.string.isRequired,
  }).isRequired,
  onTitlePlaceClick: PropTypes.func.isRequired,
  onArticleMoveMouse: PropTypes.func.isRequired,
};

