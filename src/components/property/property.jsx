import React from "react";
import PropTypes from 'prop-types';

import {getModifiedRatingValue} from '../../utils/utils.js';
import {propsTypeOffer, propsTypeReview} from "../../propsType/propsType.js";

import {ReviewsList} from '../reviews-list/reviews-list.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';
import {PlacesList} from "../places-list/places-list.jsx";

export const Property = ({offer, reviews, offers, onTitlePlaceClick}) => {

  const {id, isCheckedPremium, images, price, ratingStars, titleCard, typeCard, descriptions, numberBadrooms, numberGuests, householdItems, infoUser} = offer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">

          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => {
                return (
                  <div className="property__image-wrapper" key={image + i}>
                    <img
                      className="property__image"
                      alt="Photo {typeCard}"
                      src={image}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">

              {isCheckedPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {titleCard}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getModifiedRatingValue(ratingStars)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ratingStars}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {typeCard}
                </li>
                {numberBadrooms === 1 ?

                  <li className="property__feature property__feature--bedrooms">
                    {numberBadrooms} Bedroom
                  </li> :
                  <li className="property__feature property__feature--bedrooms">
                    {numberBadrooms} Bedrooms
                  </li>

                }

                {numberGuests === 1 ?

                  <li className="property__feature property__feature--adults">
                    Max {numberGuests} adult
                  </li> :
                  <li className="property__feature property__feature--adults">
                    Max {numberGuests} adults
                  </li>

                }
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {householdItems.map((householdItem, i) =>
                    <li className="property__inside-item" key={householdItem + i}>
                      {householdItem}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={
                      `property__avatar-wrapper
                      user__avatar-wrapper
                      ${infoUser.markSuper ? `property__avatar-wrapper--pro` : `property__avatar-wrapper`}`
                    }>
                    <img
                      className="property__avatar user__avatar"
                      width="74"
                      height="74"
                      alt="Host avatar"
                      src={infoUser.avatarUser}
                    />
                  </div>
                  <span className="property__user-name">
                    {infoUser.nameUser}
                  </span>
                </div>
                <div className="property__description">
                  {descriptions.map((description, i) => {
                    return (
                      <p className="property__text" key={description + i}>
                        {description}
                      </p>
                    );
                  })}
                </div>
              </div>

              <ReviewsList
                reviews={reviews}
              />

            </div>
          </div>
          <section className="property__map map">
            <MapCities
              offers={offers}
              idPlace={id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlacesList
                offers={offers}
                onTitlePlaceClick={onTitlePlaceClick}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  offer: PropTypes.shape(propsTypeOffer).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(propsTypeReview).isRequired
  ),
  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),
  onTitlePlaceClick: PropTypes.func.isRequired,
};