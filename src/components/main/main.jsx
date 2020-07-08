import React from "react";

import {MainOffersAvailable} from '../main-offers-available/main-offers-available.jsx';
import {MainOffersNotAvailable} from '../main-offers-not-available/main-offers-not-available.js';

import {CitiesList} from '../cities-list/cities-list.jsx';

import {propsTypeAll} from "../../propsType/propsType.js";

export const Main = ({placesCount, offers, onTitlePlaceClick, onMenuCityClick, nameCities, cityActive, cityCoordinates, onCardPlaceHoverMove}) => {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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

      <main className={`page__main page__main--index ${offers.length !== 0 && `` || `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              nameCities={nameCities}
              onMenuCityClick={onMenuCityClick}
              cityActive={cityActive}
            />
          </section>
        </div>


        <div className="cities">

          {offers.length !== 0 &&
            <MainOffersAvailable
              placesCount={placesCount}
              offers={offers}
              cityActive={cityActive}
              onTitlePlaceClick={onTitlePlaceClick}
              cityCoordinates={cityCoordinates}
              onCardPlaceHoverMove={onCardPlaceHoverMove}
            /> ||
            <MainOffersNotAvailable
            />
          }

        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  placesCount: propsTypeAll.placesCount,
  offers: propsTypeAll.offers,
  nameCities: propsTypeAll.nameCities,
  cityActive: propsTypeAll.cityActive,
  onTitlePlaceClick: propsTypeAll.onTitlePlaceClick,
  onMenuCityClick: propsTypeAll.onMenuCityClick,
  cityCoordinates: propsTypeAll.cityCoordinates,
  onCardPlaceHoverMove: propsTypeAll.func,
};
