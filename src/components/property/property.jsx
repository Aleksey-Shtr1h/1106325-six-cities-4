import React from "react";

import {getModifiedRatingValue} from '../../utils/utils.js';
import {propsTypeAll} from "../../propsType/propsType.js";

import {ReviewsList} from '../reviews-list/reviews-list.jsx';
import {WrapperMapCities} from '../map-cities/map-cities.jsx';
import {WrapperPlacesList} from "../places-list/places-list.jsx";

export const Property = ({offer, reviews, offers, cityCoordinates, authorizationStatus}) => {
  const {id, isCheckedPremium, images, price, ratingStars, titleCard, typeCard, descriptions, numberBadrooms, numberGuests, householdItems, infoUser} = offer;

  return (

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
              authorizationStatus={authorizationStatus}
            />

          </div>
        </div>
        <section className="property__map map">
          {<WrapperMapCities
            offers={offers}
            offerStaticId={id}
            cityCoordinates={cityCoordinates}
          />}
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {<WrapperPlacesList />}
          </div>
        </section>
      </div>
    </main>

  );
};

Property.propTypes = {
  offer: propsTypeAll.offer,
  reviews: propsTypeAll.reviews,
  offers: propsTypeAll.offers,
  cityCoordinates: propsTypeAll.cityCoordinates,
  authorizationStatus: propsTypeAll.stringAndUndefined,
};
