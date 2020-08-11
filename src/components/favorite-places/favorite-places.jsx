import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Preload} from '../preload/preload.jsx';

import {OperationData} from '../../store/data-reducer/data-reducer.js';

import {AppRoute} from '../../constans.js';
import {getModifiedRatingValue} from "../../utils/utils.js";

import {propsTypeAll} from "../../propsType/propsType.js";

export const FavoritePlaces = ({favoritePlaces, citiesAll, onFavoriteBtnClick}) => {

  if (favoritePlaces === null) {
    return (
      <Preload />
    );
  }

  return (
    <React.Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritePlaces.map((favoriteLocations) =>

                <li
                  className="favorites__locations-items"
                  key={favoriteLocations.cityName}
                >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{favoriteLocations.cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">

                    {favoriteLocations.offers.map((offer) =>

                      <article
                        className="favorites__card place-card"
                        key={offer.descriptions + offer.id}
                      >
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img
                              className="place-card__image"
                              src={offer.images[0] ? offer.images[0] : ``}
                              width="150"
                              height="110"
                              alt="Place image"
                            />
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button

                              className={`place-card__bookmark-button place-card__bookmark-button${offer.isFavorite ? `--active` : ``} button`}
                              type="button"
                              onClick={() => onFavoriteBtnClick(offer, favoriteLocations.cityName, citiesAll)}
                            >
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: getModifiedRatingValue(offer.ratingStars)}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <a href="#">{offer.titleCard}</a>
                          </h2>
                          <p className="place-card__type">{offer.typeCard}</p>
                        </div>
                      </article>

                    )}

                  </div>
                </li>

              )}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link
          className="footer__logo-link"
          to={AppRoute.MAIN}
        >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    citiesAll: state.DATA.citiesAll,
  };
};

const mapDispatchToProps = (dispatch) => ({

  onFavoriteBtnClick(offer, cityActive, citiesAll) {
    dispatch(OperationData.postFavorite(offer, cityActive, citiesAll));
  },

});

export const WrapperFavoritePlaces = connect(mapStateToProps, mapDispatchToProps)(FavoritePlaces);

FavoritePlaces.propTypes = {
  favoritePlaces: propsTypeAll.citiesAll,
};
